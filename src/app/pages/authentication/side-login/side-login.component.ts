import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/services/user.service';
import { NgxLoadingModule } from 'ngx-loading';
import Swal from 'sweetalert2';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-side-login',
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, NgxLoadingModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  constructor(
    private router: Router,
    private userService: UsersService,

  ) { }

  submitted = false;
  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    if (this.user.password === '' || this.user.username === '') {
      return;
    }


    this.submitted = true;
    this.userService.logIn(this.user).subscribe((response: HttpResponse<any>) => {
      this.submitted = false;
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        this.userService.isUserBOLoggedIn = true;
        localStorage.setItem('token', response.body.content.access_token);
        // this.userService.getLoggedRequest().subscribe((data) => {
        // });
        this.router.navigate(['dashboard']);
      } else if (response.status === 202) {
        // this.router.navigate(['reset-password'], { queryParams: { wkd: response.body.content.code } });
      }

    }, err => {
      console.log(err.status);
      this.submitted = false;
      Swal.fire({
        title: 'Atención',
        text: err.error.message,
      });
      // Swal.fire({
      //   title: 'Estimado usuario',
      //   text: err.error.message,
      //   imageUrl: 'assets/img/logo-white.jpg',
      //   imageWidth: 250,
      //   imageHeight: 250,
      //   imageAlt: 'Logo image',
      // });

    });



  }


}
