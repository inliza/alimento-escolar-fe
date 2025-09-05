import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { E } from '@angular/material/error-options.d-CGdTZUYk';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import { catchError, finalize, map, Observable, of, tap } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { ConduceDesayunoService } from 'src/app/services/conduce.service';
import { ItemsService } from 'src/app/services/items.service';
import { MenuService } from 'src/app/services/menu.service';
import { SchoolService } from 'src/app/services/schools.service';
import Swal from 'sweetalert2';

export interface Conduce {
  id?: number,
  codigo: number;
  escuelaId: number;
  articuloId: number;
  cantidad: number;
  precio: number;
  total: number;
  itbis: number;
  fecha: string;
  articulo: any,
  escuela: any
}

@Component({
  selector: 'app-conduces',
  imports: [MatListModule, MatCardModule, MatIconModule, MaterialModule, ReactiveFormsModule, FormsModule, CommonModule, NgxLoadingModule],
  templateUrl: './conduces.component.html',
  styleUrl: './conduces.component.scss'
})
export class ConducesComponent implements OnInit {

  displayedColumns: string[] = [
    'codigo',
    'escuela',
    'articulo',
    'cantidad',
    'precio',
    'total',
    'itbis',
    'fecha',
    'accion'
  ];

  loading = false;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  pageSize = 10;

  selectSchoolId: number | null = null;
  selectedDate: Date | null = null;

  constructor(
    private readonly schoolService: SchoolService,
    private readonly menuService: MenuService,
    private readonly conduceService: ConduceDesayunoService,
    private articulosService: ItemsService,
    private router: Router
  ) { }


  newConduce: Conduce = {
    codigo: 0,
    escuelaId: 0,
    articuloId: 0,
    cantidad: 0,
    precio: 0,
    total: 0,
    itbis: 0,
    fecha: '',
    articulo: '',
    escuela: ''
  }
  conduces: Conduce[] = [];
  escuelas: any[] = [];
  codigoActual: number = 0;
  codigoInicial: number = 0;
  fechaHastaDate: Date | null = null;
  fechaHasta = false;
  selectArticulo = false;
  articuloId: any | null = null;
  articulos: any[] = [];
  monthMenu: any[] = [];

  ngOnInit(): void {
    this.getNextConduce();
    this.getEscuelas();
    this.getMonthMenu();
  }


  getMonthMenu() {
    this.menuService.getAll().subscribe((data: any) => {
      this.monthMenu = data.content;
    })
  }

  getNextConduce() {
    this.conduceService.getNextConduceNumber().subscribe((data: any) => {
      this.codigoInicial = this.codigoActual = data.content.nextCode;
    })
  }


  getEscuelas() {
    this.schoolService.getAllByUser().subscribe({
      next: (res: any) => {
        this.escuelas = res.content;
      },
      error: (err) => {
        console.error(err);
        this.escuelas = [];
      }
    });
  }

  saveConduce$(): Observable<boolean> {
    if (this.conduces.length === 0) {
      return of(false);
    }

    this.loading = true;

    return this.conduceService.bulkCreate(this.conduces).pipe(
      map((res: any) => res?.code === 200),
      tap((success) => {
        // if (success) {
        //   this.conduces = [];
        //   this.ngOnInit();
        // }
        return success;
      }),
      catchError((err) => {
        Swal.fire({
          title: 'Atención',
          text: err.error.message,
        });
        console.error(err);
        return of(false);
      }),
      finalize(() => (this.loading = false)),
    );
  }


  get fechaMinimaHasta(): Date | null {
    if (!this.selectedDate) return null;
    const f = new Date(this.selectedDate);
    f.setDate(f.getDate() + 1); // sumamos 1 día
    return f;
  }

  eliminar(row: Conduce): void {
    if (!this.conduces?.length) return;

    // 1) Guarda el mínimo código ANTES de eliminar
    const minCodeBefore = Math.min(...this.conduces.map(c => c.codigo));

    // 2) Quita el item seleccionado
    const idx = this.conduces.findIndex(c => c.codigo === row.codigo);
    if (idx === -1) return;
    this.conduces.splice(idx, 1);

    // 3) Reindexa comenzando desde el mínimo que existía antes
    if (this.conduces.length > 0) {
      const sorted = this.conduces.slice().sort((a, b) => a.codigo - b.codigo);

      sorted.forEach((c, i) => {
        c.codigo = minCodeBefore + i; // ← arranca desde el antiguo mínimo
      });

      this.conduces = sorted;

      // 4) Siguiente código disponible continúa la secuencia
      this.codigoActual = minCodeBefore + this.conduces.length;
    } else {
      // Si ya no quedan, reinicia como prefieras
      this.codigoActual = this.codigoInicial; // o 1, o el que uses como base
    }

    // 5) Refresca la tabla
    this.dataSource.data = this.conduces;
  }

  editar(element: any) {

  }

  onArticuloChange(event: any) {
    if (event.checked) {
      this.getAllArticulos();
    } else {
      // ❌ El checkbox se desmarcó
      console.log('Articulo desmarcado');
    }
  }

  getAllArticulos() {
    this.articulosService.getAllBreakfastItems().subscribe({
      next: (res: any) => {
        this.articulos = res.content;
      },
      error: (err) => {
        console.error(err);
        this.articulos = [];
      }
    });
  }


  guardar() {
    this.saveConduce$().subscribe((ok) => {
      if (ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Conduces guardados existosamente',
        });
        this.getNextConduce();
        this.getEscuelas();
        this.getMonthMenu();
        this.dataSource.data = this.conduces = [];
        this.selectArticulo = false;
        this.articuloId = null;
        this.articulos = [];
      } else {

      }
    })
  }

  imprimir() {
    this.saveConduce$().subscribe((ok) => {
      if (ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Conduces guardados existosamente',
        });
        this.getNextConduce();
        this.getEscuelas();
        this.getMonthMenu();
        sessionStorage.setItem('conduces_print', JSON.stringify(this.conduces));
        window.open(this.router.serializeUrl(this.router.createUrlTree(['print/conduces'])), '_blank');
        this.dataSource.data = this.conduces = [];

      } else {

      }
    })

  }

  // Acción del botón "Agregar"
  addConduces(): void {

    console.log(this.selectSchoolId);
    // Validaciones mínimas
    if (!this.selectedDate) {
      // opcional: mostrar snackbar/toast
      return;
    }
    if (this.fechaHasta && !this.fechaHastaDate) {
      // opcional: mostrar snackbar/toast
      return;
    }
    // Manejar rango invertido: si hasta < desde, intercambiar
    let fromDate = new Date(this.selectedDate);
    let toDate = this.fechaHasta && this.fechaHastaDate ? new Date(this.fechaHastaDate) : new Date(this.selectedDate);
    if (toDate.getTime() < fromDate.getTime()) {
      const tmp = fromDate;
      fromDate = toDate;
      toDate = tmp;
    }


    // Escuelas a usar
    const schoolsToUse: any[] = this.selectSchoolId == 0
      ? this.escuelas
      : this.escuelas.filter(e => e.id === this.selectSchoolId);

    // Fechas a usar
    const days: Date[] = this.datesBetweenInclusive(fromDate, toDate);

    // Por cada día y por cada escuela, agregar item
    const nuevos: Conduce[] = [];
    for (const day of days) {
      let articulo;
      const fechaStr = this.toYYYYMMDD(day);
      if (!this.fechaHasta && this.selectArticulo && this.articuloId !== null) {
        articulo = this.articuloId;
      } else {
        articulo = this.getArticuloPorFecha(day);
      }

      for (const school of schoolsToUse) {
        if (this.alreadyExists(school.id, fechaStr)) {

          Swal.fire({
            title: 'Atención',
            text: `La escuela ${school.nombre} ya tiene un conduce el ${day.toDateString()}. No agregado.`
          })
          continue;
        }// evita duplicado

        //Condiciones para que si es finde y la escuela no es prepara, que siga
        //Tambien se valida que el dia de prepara de la escuela corresponda al dia en cuestion
        if ((day.getDay() == 6 || day.getDay() == 0) && (!school.prepara || day.getDay() != school.prepara_Day)) {
          continue;
        }

        //Si es prepara y no es finde, que siga
        if(school.prepara && day.getDay() != 6 && day.getDay() != 0){
          continue;
        }
        // Calcula totales si quieres (aquí copiamos lo de newConduce)
        const cantidad = school.racion ?? 0;
        const precio = parseFloat(articulo.precio);
        const itbis = articulo.itbis ? (cantidad * precio) * 0.18 : 0;
        const total = cantidad * precio;

        const item: Conduce = {
          ...this.newConduce,
          codigo: this.codigoActual, // o usa this.codigoActual si lo tienes
          escuelaId: school.id,
          fecha: fechaStr,
          cantidad,
          precio,
          itbis,
          total,
          articuloId: articulo.id,
          articulo: articulo,
          escuela: school
        };

        nuevos.push(item);
        this.codigoActual++; // ← incrementa para el próximo

      }
    }

    if (nuevos.length > 0) {
      this.conduces = [...this.conduces, ...nuevos];
      // refrescar dataSource si usas MatTableDataSource
      this.dataSource.data = this.conduces;
      console.log(this.conduces);
    }

  }

  getArticuloPorFecha(fecha: Date): any | null {
    // --- 1. Día de la semana ---
    // getDay(): 0=domingo, 1=lunes,...6=sábado
    const dayOfWeek = fecha.getDay(); // usamos el valor tal cual

    // --- 2. Orden en el mes ---
    const dayOfMonth = fecha.getDate();
    const orderInMonth = Math.ceil(dayOfMonth / 7);

    // --- 3. Buscar coincidencia en el arreglo ---
    const match = this.monthMenu.find(item =>
      item.dia.dayOfTheWeek === dayOfWeek &&
      item.dia.orderInMonth === orderInMonth
    );

    return match ? match.articulo : null;
  }

  private datesBetweenInclusive(from: Date, to: Date): Date[] {
    const start = new Date(from); start.setHours(0, 0, 0, 0);
    const end = new Date(to); end.setHours(0, 0, 0, 0);
    const days: Date[] = [];
    for (let d = new Date(start); d.getTime() <= end.getTime(); d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  }

  private toYYYYMMDD(d: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    return `${y}-${m}-${day}`;
  }

  private alreadyExists(escuelaId: number, fechaStr: string): boolean {
    return this.conduces.some(c => c.escuelaId === escuelaId && c.fecha === fechaStr);
  }


}
