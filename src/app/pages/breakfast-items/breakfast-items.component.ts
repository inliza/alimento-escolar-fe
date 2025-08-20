import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-breakfast-items',
  imports: [MatListModule, MatCardModule, MatIconModule, MaterialModule],
  templateUrl: './breakfast-items.component.html',
  styleUrl: './breakfast-items.component.scss'
})
export class BreakfastItemsComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'precio',
    'itbis',
  ];

  private loading = true;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: ItemsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllBreakfastItems().subscribe({
      next: (res: any) => {
        const rows = res.content;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




}
