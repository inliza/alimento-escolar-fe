import { SelectionModel } from '@angular/cdk/collections';
import { O } from '@angular/cdk/overlay-module.d-B3qEQtts';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import { MaterialModule } from 'src/app/material.module';
import { ConduceDesayunoService } from 'src/app/services/conduce.service';
import { SchoolService } from 'src/app/services/schools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conduces-recover',
  imports: [MaterialModule, CommonModule, FormsModule, NgxLoadingModule],
  templateUrl: './conduces-recover.component.html',
  styleUrl: './conduces-recover.component.scss'
})
export class ConducesRecoverComponent implements OnInit {

  loading = false;
  selectSchoolId: number | null = null;
  selectedDate: Date | null = null;

  conduces: any[] = [];
  escuelas: any[] = [];
  fechaHastaDate: Date | null = null;
  fechaHasta = false;

  displayedColumns: string[] = [
    'select',
    'codigo',
    'escuela',
    'articulo',
    'cantidad',
    'precio',
    'total',
    'itbis',
    'fecha',
  ];

  selection = new SelectionModel<any>(true, []); // multiselección
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) set matPaginator(p: MatPaginator) {
    if (p) this.dataSource.paginator = p;
  }
  @ViewChild(MatSort) set matSort(s: MatSort) {
    if (s) this.dataSource.sort = s;
  }


  constructor(
    private readonly schoolService: SchoolService,
    private readonly conduceService: ConduceDesayunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEscuelas();
  }

  get fechaMinimaHasta(): Date | null {
    if (!this.selectedDate) return null;
    const f = new Date(this.selectedDate);
    f.setDate(f.getDate() + 1); // sumamos 1 día
    return f;
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

  getByDate() {
    this.loading = true;
    this.conduceService.getByDateDeleted(this.selectSchoolId ?? 0, this.toYYYYMMDD(this.selectedDate), this.fechaHasta ? this.toYYYYMMDD(this.fechaHastaDate) : undefined).subscribe((data: any) => {
      this.loading = false;
      this.dataSource.data = this.conduces = data.content.map((c: any) => ({
        id: c.id,
        codigo: c.codigoConduce,
        escuelaId: c.escuelaId,
        articuloId: c.articuloId,
        cantidad: c.cantidad,
        precio: Number(c.precio),
        total: Number(c.total),
        itbis: Number(c.itbis ?? 0),
        fecha: typeof c.fechaEntrega === 'string'
          ? c.fechaEntrega.substring(0, 10)
          : c.fechaEntrega,
        articulo: c.articulo,
        escuela: c.escuela,
      }));
    }, err => {
      this.loading = false;
      Swal.fire({
        title: 'Atención',
        text: err.error.message,
      });
    });
  }

  recover() {
    if (!this.selection.hasValue()) {
      return;
    }

    const seleccionados = this.selection.selected.length
      ? this.selection.selected : [];

    const ids = seleccionados.map(c => c.id);

  Swal.fire({
      icon: 'warning',
      title: `Atención`,
      text: `¿Está seguro que desea recuperar estos ${seleccionados.length} conduces?`,
      confirmButtonText: 'Si',
      showCancelButton: true,
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'my-confirm-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.conduceService.recoverConduces(ids).subscribe({
          next: (res) => {
            console.log('Conduces recuperados con éxito:', res);
            Swal.fire({
              icon: 'success',
              title: '¡Éxito!',
              text: 'Conduces recuperados correctamente.',
            });
            this.getByDate();
          },
          error: (err) => {
            console.error('Error al recuperar los Conduces:', err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: err.error?.message || 'Ocurrió un error al recuperar los conduces.',
            });
          }
        });
      }
    });


  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numRows > 0 && numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  private toYYYYMMDD(d: Date | null): string {
    if (d === null) {
      return '';
    }
    const pad = (n: number) => n.toString().padStart(2, '0');
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    return `${y}-${m}-${day}`;
  }

}
