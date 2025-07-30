import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-schools',
  imports: [MatListModule, MatCardModule,MatIconModule, MaterialModule ],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsComponent {

}
