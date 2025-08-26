import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conduces-report',
  imports: [CommonModule,],
  templateUrl: './conduces-report.component.html',
  styleUrl: './conduces-report.component.scss'
})
export class ConducesReportComponent implements OnInit, AfterViewInit {
  conduces: any[] = [];
  company: any;
  constructor(
    private service: UsersService
  ) {

  }

  ngOnInit(): void {
    const raw = sessionStorage.getItem('conduces_print');
    this.conduces = raw ? JSON.parse(raw) : [];
    this.service.getLoggedRequest().subscribe((data:any)=>{
      this.company = data.content.company;
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.print();
    }, 100);
  }

}