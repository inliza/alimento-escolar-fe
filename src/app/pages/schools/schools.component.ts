import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { SchoolsModalComponent } from 'src/app/modals/schools-modal/schools-modal.component';
import { SchoolService } from 'src/app/services/schools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schools',
  imports: [MatListModule, MatCardModule, MatIconModule, MaterialModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})


export class SchoolsComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'director',
    'codigoEscuela',
    'telefono',
    'localidad',
    'accion'
  ];

  private loading = true;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) set matPaginator(p: MatPaginator) {
    if (p) this.dataSource.paginator = p;
  }
  @ViewChild(MatSort) set matSort(s: MatSort) {
    if (s) this.dataSource.sort = s;
  }

  constructor(
    private dialog: MatDialog,
    private readonly service: SchoolService

  ) { }

  ngOnInit(): void {
    this.getAllByUser();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SchoolsModalComponent, {
      width: '550px', // opcional
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.success) {
        console.log('Guardado con éxito!');
        this.getAllByUser();
      } else {
        console.log('Modal cancelado');
      }
    });
  }

  getAllByUser() {
    this.service.getAllByUser().subscribe({
      next: (res: any) => {
        const rows = res.content.map(this.mapToRow);
        this.dataSource.data = rows;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editar(element: any) {
    console.log('Editar', element);
    const dialogRef = this.dialog.open(SchoolsModalComponent, {
      width: '550px',
      data: { school: element._raw.id, editing: true }
    }).afterClosed().subscribe(result => {
      if (result.success) {
        console.log('Guardado con éxito!');
        this.getAllByUser();
      } else {
        console.log('Modal cancelado');
      }

    });
  }

  eliminar(element: any) {
    console.log('Eliminar', element);
    Swal.fire({
      icon: 'warning',
      title: `Atención`,
      text: `¿Está seguro que desea eliminar la escuela ${element.nombre}?`,
      confirmButtonText: 'Si',
      showCancelButton: true,
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'my-confirm-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteSchool(element._raw.id).subscribe({
          next: (res) => {
            console.log('Escuela eliminada con éxito:', res);
            Swal.fire({
              icon: 'success',
              title: '¡Éxito!',
              text: 'La escuela ha sido eliminada correctamente.',
            });
            this.getAllByUser();
          },
          error: (err) => {
            console.error('Error al eliminar la escuela:', err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema al eliminar la escuela. Inténtelo de nuevo.',
            });
          }
        });
      }
    });
  }

  private mapToRow = (e: any): any => {
    return {
      nombre: e.nombre,
      direccion: e.direccion,
      director: e.director,
      codigoEscuela: e.codigoEscuela,
      telefono: e.telefono,
      localidad: e.localidad.nombre,
      _raw: e
    };
  };


}
