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

@Component({
  selector: 'app-conduces-report',
  imports: [MaterialModule, CommonModule, FormsModule, NgxLoadingModule],
  templateUrl: './conduces-report.component.html',
  styleUrl: './conduces-report.component.scss'
})
export class ConducesReportComponent implements OnInit {

  loading = false;

  selectSchoolId: number | null = null;
  selectedDate: Date | null = null;

  conduces: any[] = [];
  escuelas: any[] = [];
  fechaHastaDate: Date | null = null;
  fechaHasta = false;

  displayedColumns: string[] = [
    'fecha',
    'conduce',
    'codigo',
    'escuela',
    'panes',
    'galletas',
    'bizcochos',
    'vegetales',
  ];

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

  getRelacionConduce() {
    this.loading = true;
    this.conduceService.getRelacionConduce(this.selectSchoolId ?? 0, this.toYYYYMMDD(this.selectedDate), this.fechaHasta ? this.toYYYYMMDD(this.fechaHastaDate) : undefined).subscribe((data: any) => {
      this.loading = false;
      console.log(data);
      this.conduces = data.content;
      this.dataSource.data = this.conduces;
    }, (error) => {
      this.loading = false;
      console.error(error);
      this.conduces = [];
    });
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

  imprimir() {
    sessionStorage.setItem('relacion_conduces_data', JSON.stringify(this.conduces));
    window.open('print/relacion', '_blank');

  }

  getByDate() { }

  get fechaMinimaHasta(): Date | null {
    if (!this.selectedDate) return null;
    const f = new Date(this.selectedDate);
    f.setDate(f.getDate() + 1); // sumamos 1 día
    return f;
  }

}
