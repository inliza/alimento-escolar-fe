import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxLoadingModule } from 'ngx-loading';
import { MaterialModule } from 'src/app/material.module';
import { ItemsService } from 'src/app/services/items.service';
import { MenuService } from 'src/app/services/menu.service';
import { ToastService } from 'src/app/services/toast.service';
import Swal from 'sweetalert2';

export interface NewMenu {
  articuloId: number;
  diaId: number;
}

@Component({
  selector: 'app-menu',
  imports: [MaterialModule, ReactiveFormsModule, FormsModule, CommonModule, NgxLoadingModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit {
  displayedColumns: string[] = [
    'dia',
    'articulo',
    'precio',
  ];

  newItem: NewMenu = {
    articuloId: 0,
    diaId: 0
  };
  diasDisponibles: any[] = [];
  articulos: any[] = [];
  addNewItem: boolean = false;
  loading = false;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) set matPaginator(p: MatPaginator) {
    if (p) this.dataSource.paginator = p;
  }
  @ViewChild(MatSort) set matSort(s: MatSort) {
    if (s) this.dataSource.sort = s;
  }


  constructor(
    private service: MenuService,
    private articulosService: ItemsService,
    private readonly toast: ToastService,

  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (res: any) => {
        const rows = res.content.map(this.mapToRow);
        this.dataSource.data = rows;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.dataSource.data = [];
        this.loading = false;
      }
    });
  }

  saveNewItem() {
    this.loading = true;
    this.service.create(this.newItem).subscribe({
      next: (res: any) => {
        console.log('Nuevo item guardado:', res);
        this.loading = false;
        this.getAllDiasDisponibles();
        this.getAll();
        // this.addNewItem = false;
        this.newItem = { articuloId: 0, diaId: 0 };
        // Swal.fire({
        //   icon: 'success',
        //   title: '¡Éxito!',
        //   text: 'Menu guardado.',
        // });
        this.toast.showToast('success', 'Menu guardado.', 'top-right');

      },
      error: (err) => {

        console.error('Error al guardar el nuevo item:', err);
      }
    });
  }


  addNewEvent() {
    this.getAllDiasDisponibles();
    this.getAllArticulos();
    this.addNewItem = !this.addNewItem;
    this.newItem = { articuloId: 0, diaId: 0 };

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private mapToRow = (e: any): any => {
    return {
      dia: e.dia.name,
      articulo: e.articulo.nombre,
      precio: e.articulo.precio,
      _raw: e
    };
  };

  getAllDiasDisponibles() {
    this.service.getAllDaysAvailable().subscribe({
      next: (res: any) => {
        this.diasDisponibles = res.content;
      },
      error: (err) => {
        console.error(err);
        this.diasDisponibles = [];
      }
    });
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



}
