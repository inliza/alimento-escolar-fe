import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Globals } from "src/global";

@Injectable({
    providedIn: 'root'
})
export class SchoolService {
    constructor(
        private http: HttpClient,
        private globals: Globals
    ) { }


    getAllByUser(): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas`;
        return this.http.get<any>(urlAPI);
    }


       getOneById(schoolId:number): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas/${schoolId}`;
        return this.http.get<any>(urlAPI);
    }


     getAllProvinces(): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas/provincias`;
        return this.http.get<any>(urlAPI);
    }

     getAllDistritos(idProvincia:number): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas/distritos-by-province/${idProvincia}`;
        return this.http.get<any>(urlAPI);
    }

     getAllLocalidades(idProvincia:number): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas/localidades-by-province/${idProvincia}`;
        return this.http.get<any>(urlAPI);
    }

    createSchool(data: any): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas`;
        return this.http.post<any>(urlAPI, data);
    }

      deleteSchool(schoolId: number): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas/${schoolId}`;
        return this.http.delete<any>(urlAPI);
    }

     updateSchool(data: any, id:number): Observable<any> {
        const urlAPI = this.globals.urlApi + `escuelas/${id}`;
        return this.http.put<any>(urlAPI, data);
    }

}