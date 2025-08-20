import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Globals } from "src/global";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor(
        private http: HttpClient,
        private globals: Globals
    ) { }

    getAllDaysAvailable(): Observable<any> {
        const urlAPI = this.globals.urlApi + `menu/dias-disponibles`;
        return this.http.get<any>(urlAPI);
    }
    
    getAll(): Observable<any> {
        const urlAPI = this.globals.urlApi + `menu`;
        return this.http.get<any>(urlAPI);
    }

    create(item: any): Observable<any> {
        const urlAPI = this.globals.urlApi + `menu`;
        return this.http.post<any>(urlAPI, item);
    }
    
}
