import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { combineLatest, map, of, take, tap } from 'rxjs';
import { UsersService } from 'src/app/services/user.service';

export interface RelacionConduceRow {
  fecha: string | Date;          // 'YYYY-MM-DD' o Date
  numeroConduce: number;         // No. Conduce
  codigoEscuela: string | number; // Código escuela
  nombreEscuela: string;
  a1?: number;
  a2?: number;
  a3?: number;
  a4?: number;
}


@Component({
  selector: 'app-relacion-conduce-report',
  imports: [CommonModule],
  templateUrl: './relacion-conduce-report.component.html',
  styleUrl: './relacion-conduce-report.component.scss'
})
export class RelacionConduceReportComponent implements OnInit, AfterViewInit {
  @Input() mesAnio?: string;
  @Input() filas: RelacionConduceRow[] = [];

  totales = { panes: 0, galletas: 0, bizcochos: 0, panVeg: 0 };
  totalFilas = 0;
  granTotal = 0;
  company: any;
  rightLabel = '';

  constructor(
    private service: UsersService
  ) { }

  ngOnInit(): void {
    const company$ = this.service.getLoggedRequest().pipe(
      map((res: any) => res?.content?.company),
      tap(c => this.company = c)
    );

    const filas$ = of(sessionStorage.getItem('relacion_conduces_data')).pipe(
      map(raw => raw ? JSON.parse(raw) : []),
      tap(f => this.filas = f)
    );

    combineLatest([company$, filas$]).pipe(take(1)).subscribe(() => {
      this.calcTotales(); // <- aquí ya tienes this.filas
      this.buildRightLabel();     // 👈 aquí

      this.totalFilas = this.filas?.length ?? 0;
      this.granTotal =
        (this.totales.panes ?? 0) +
        (this.totales.galletas ?? 0) +
        (this.totales.bizcochos ?? 0) +
        (this.totales.panVeg ?? 0);

      // this.isReady = true;     
      setTimeout(() => window.print(), 120);
    });
  }

  // ejemplo
  private calcTotales() {
    const sum = (n?: number) => Number(n ?? 0);
    this.totales = this.filas.reduce((acc, r) => ({
      panes: acc.panes + sum(r.a1),
      galletas: acc.galletas + sum(r.a2),
      bizcochos: acc.bizcochos + sum(r.a3),
      panVeg: acc.panVeg + sum(r.a4),
    }), { panes: 0, galletas: 0, bizcochos: 0, panVeg: 0 });
  }


  private buildRightLabel(): void {
    if (!this.filas?.length) {
      this.rightLabel = '';
      return;
    }

    // Normaliza fechas a 'YYYY-MM-DD' para contar únicas
    const norm = (v: any) => {
      const d = new Date(v);
      return isNaN(+d) ? String(v) : d.toISOString().slice(0, 10);
    };
    const unique = new Set(this.filas.map(r => norm(r.fecha)));

    // Tomamos la primera fecha de la lista (ya ordenada o como venga)
    const first = new Date(this.filas[0].fecha);
    const dia = first.getDate();
    const mes = first.toLocaleDateString('es-ES', { month: 'long' }).toUpperCase();
    const anio = first.getFullYear();

    if (unique.size > 1) {
      this.rightLabel = `MES DE ${mes} DEL ${anio}`;
    } else {
      this.rightLabel = `DÍA ${dia} DE ${mes} DEL ${anio}`;
    }
  }


  ngAfterViewInit(): void {
    setTimeout(() => window.print(), 300);
  }

  fmtFecha(v: string | Date) {
    try {
      if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) {
        // Descompone YYYY-MM-DD y crea un Date local
        const [y, m, d] = v.split('-').map(Number);
        const date = new Date(y, m - 1, d); // <-- sin zona horaria
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
      return new Date(v).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch {
      return String(v);
    }
  }

  fmtInt(n?: number) { return Number(n ?? 0).toLocaleString('es-DO', { maximumFractionDigits: 0 }); }
}
