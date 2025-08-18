import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxLoadingModule } from 'ngx-loading';
import { MaterialModule } from 'src/app/material.module';
import { SchoolService } from 'src/app/services/schools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schools-modal',
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, NgxLoadingModule],
  templateUrl: './schools-modal.component.html',
  styleUrl: './schools-modal.component.scss'
})
export class SchoolsModalComponent implements OnInit {
  loading = false;
  public editing = false;

  constructor(
    private readonly service: SchoolService,
    public dialogRef: MatDialogRef<SchoolsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  escuelaForm!: FormGroup;

  localidades: any[] = [];
  distritos: any[] = [];
  provincias: any[] = [];

  model = {
    nombre: '',
    direccion: '',
    telefono: '',
    director: '',
    codigoEscuela: '',
    racion: null as number | null,
    idLocalidad: null as number | null,
    idDistrito: null as number | null,
    idCompany: null as number | null,
    tipoEscuela: '',
    deleted: false,
    prepara: false,
    prepara_Day: ''
  };

  ngOnInit(): void {
    this.getProvincias();
    this.editing = this.data && this.data.editing;
    if(this.editing) {
      this.loadSchoolData(this.data.school);
    }
  }

  loadSchoolData(schoolId: number) {
    this.loading = true;
    this.service.getOneById(schoolId).subscribe((data) => {
      const school = data.content;
      if (school) {
        this.model = {
          nombre: school.nombre,
          direccion: school.direccion,
          telefono: school.telefono,
          director: school.director,
          codigoEscuela: school.codigoEscuela,
          racion: school.racion,
          idLocalidad: school.idLocalidad,
          idDistrito: school.idDistrito,
          idCompany: school.idCompany,
          tipoEscuela: school.tipoEscuela,
          deleted: school.deleted,
          prepara: school.prepara,
          prepara_Day: school.prepara_Day
        };
        if (school.idLocalidad) {
          this.getLocalidades(school.idLocalidad);
        }
        if (school.idDistrito) {
          this.getDistritos(school.idDistrito);
        }
      }
      this.loading = false;
    }, err => {
      console.error('Error al cargar datos de la escuela:', err);
      this.loading = false;
    });
  }


  onProvinciaChange(event: any) {
    console.log('Provincia seleccionada:', event.value);
    this.getLocalidades(event.value);
    this.getDistritos(event.value);
  }

  onSubmit(form: any) {
    if (!form.valid) {
      console.log('Formulario inválido', this.model);
      return;
    }

    this.loading = true;
    if(!this.editing) {
    this.service.createSchool(this.model).subscribe((data) => {
      console.log('Escuela creada con éxito:', data);
      Swal.fire({
        title: 'Super!',
        text: 'Su escuela ha sido creada con éxito.',
      });
      this.dialogRef.close({ success: true });
      this.loading = false;
    }, err => {
      console.error('Error al crear la escuela:', err);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al crear la escuela. Inténtelo de nuevo.',
      });
      this.loading = false;
    });
    } else {
      this.service.updateSchool(this.model, this.data.school).subscribe((data) => {
        console.log('Escuela actualizada con éxito:', data);
        Swal.fire({
          title: 'Super!',
          text: 'Su escuela ha sido actualizada con éxito.',
        });
        this.dialogRef.close({ success: true });
        this.loading = false;
      }, err => {
        console.error('Error al actualizar la escuela:', err);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al actualizar la escuela. Inténtelo de nuevo.',
        });
        this.loading = false;
      });
    }
  }

  getProvincias() {
    this.loading = true;
    this.service.getAllProvinces().subscribe((data) => {
      console.log('Provincias:', data);
      this.provincias = data.content;
      this.loading = false;
    }, err => {
      console.error('Error al obtener provincias:', err)
      this.loading = false;
    });
  }

  getDistritos(idProvincia: number) {
    this.service.getAllDistritos(idProvincia).subscribe((data) => {
      console.log('Distritos:', data);
      this.distritos = data.content;
    });
  }

  getLocalidades(idProvincia: number) {
    this.service.getAllLocalidades(idProvincia).subscribe((data) => {
      console.log('Localidades:', data);
      this.localidades = data.content;
    });
  }

}
