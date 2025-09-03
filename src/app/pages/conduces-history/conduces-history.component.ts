import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { Conduce } from '../conduces/conduces.component';
import { FormsModule } from '@angular/forms';
import { SchoolService } from 'src/app/services/schools.service';
import { ConduceDesayunoService } from 'src/app/services/conduce.service';
import { Router } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import Swal from 'sweetalert2';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-conduces-history',
  imports: [MaterialModule, CommonModule, FormsModule, NgxLoadingModule],
  templateUrl: './conduces-history.component.html',
  styleUrl: './conduces-history.component.scss'
})
export class ConducesHistoryComponent implements OnInit {

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
    'accion'
  ];

  selection = new SelectionModel<any>(true, []); // multiselección

  loading = false;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) set matPaginator(p: MatPaginator) {
    if (p) this.dataSource.paginator = p;
  }
  @ViewChild(MatSort) set matSort(s: MatSort) {
    if (s) this.dataSource.sort = s;
  }
  pageSize = 10;

  selectSchoolId: number | null = null;
  selectedDate: Date | null = null;

  conduces: Conduce[] = [];
  escuelas: any[] = [];
  fechaHastaDate: Date | null = null;
  fechaHasta = false;

  constructor(
    private readonly schoolService: SchoolService,
    private readonly conduceService: ConduceDesayunoService,
    private router: Router
  ) { }


  ngOnInit(): void {
    // this.getNextConduce();
    this.getEscuelas();
    // this.getMonthMenu();
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
    this.conduceService.getByDate(this.selectSchoolId ?? 0, this.toYYYYMMDD(this.selectedDate), this.fechaHasta ? this.toYYYYMMDD(this.fechaHastaDate) : undefined).subscribe((data: any) => {
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


  eliminar(element: any) {
    console.log('Eliminar', element);
    Swal.fire({
      icon: 'warning',
      title: `Atención`,
      text: `¿Está seguro que desea el conduce ${element.codigo}?`,
      confirmButtonText: 'Si',
      showCancelButton: true,
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'my-confirm-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.conduceService.delete(element.id).subscribe({
          next: (res) => {
            console.log('Conduce eliminado con éxito:', res);
            Swal.fire({
              icon: 'success',
              title: '¡Éxito!',
              text: 'Conduce eliminado correctamente.',
            });
            this.getByDate();
          },
          error: (err) => {
            console.error('Error al eliminar el Conduce:', err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema al eliminar el conduce. Inténtelo de nuevo.',
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

  imprimir() {
     const seleccionados = this.selection.selected.length
    ? this.selection.selected
    : this.dataSource.data;

    sessionStorage.setItem('conduces_print', JSON.stringify(seleccionados));
    window.open(this.router.serializeUrl(this.router.createUrlTree(['print/conduces'])), '_blank');

  }

  get fechaMinimaHasta(): Date | null {
    if (!this.selectedDate) return null;
    const f = new Date(this.selectedDate);
    f.setDate(f.getDate() + 1); // sumamos 1 día
    return f;
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
