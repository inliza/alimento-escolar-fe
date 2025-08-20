import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Globals } from "src/global";

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    constructor(
        private http: HttpClient,
        private globals: Globals
    ) { }

    getAllBreakfastItems(): Observable<any> {
        const urlAPI = this.globals.urlApi + `articulos/desayuno`;
        return this.http.get<any>(urlAPI);
    }
    
}

