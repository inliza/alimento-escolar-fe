import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public isUserBOLoggedIn: boolean = false;
  private loggedUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public loggedUser$: Observable<any> = this.loggedUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private globals: Globals,
    private router: Router

  ) { }

  logIn(data: any): Observable<any> {
    const urlAPI = this.globals.urlApi + `users/login`;
    return this.http.post<any>(urlAPI, data,  { observe: 'response' });
  }

  signUp(data: any): Observable<any> {
    const urlAPI = this.globals.urlApi + `users/signup`;
    return this.http.post<any>(urlAPI, data);
  }

  updatePassword(data: any): Observable<any> {
    const urlAPI = this.globals.urlApi + `auth/update-password`;
    return this.http.post<any>(urlAPI, data);
  }

  getLoggedRequest(): Observable<any> {
    const urlAPI = this.globals.urlApi + `users/logged`;
    return this.http.get<any>(urlAPI).pipe(
      tap(data => this.loggedUserSubject.next(data))
    );
  }

  forgotPassword(data: any): Observable<any> {
    const urlAPI = this.globals.urlApi + `auth/forgot-password`;
    return this.http.post<any>(urlAPI, data);
  }

  resetPassword(data: any): Observable<any> {
    const urlAPI = this.globals.urlApi + `auth/reset-password`;
    return this.http.post<any>(urlAPI, data);
  }

  validateCode(code: string): Observable<any> {
    const urlAPI = this.globals.urlApi + `auth/validate-code/${code}`;
    return this.http.get<any>(urlAPI);
  }


  getLoggedUser(): Observable<any> {
    return this.loggedUser$;
  }

  public logout() {
    localStorage.clear();
    this.isUserBOLoggedIn = false;
    this.loggedUserSubject.next(null);
    this.router.navigate(['authentication/login']);

  }

  public logoutNoRedirect() {
    localStorage.clear();
    this.isUserBOLoggedIn = false;
  }

  public setLoginValue(): boolean {
    let Token = localStorage.getItem('token');
    Token
      ? (this.isUserBOLoggedIn = true)
      : (this.isUserBOLoggedIn = false);
    return this.isUserBOLoggedIn;
  }
}
