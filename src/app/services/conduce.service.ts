import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Globals } from "src/global";

@Injectable({
    providedIn: 'root'
})
export class ConduceDesayunoService {
    constructor(
        private http: HttpClient,
        private globals: Globals
    ) { }



    getNextConduceNumber(): Observable<any> {
        const urlAPI = this.globals.urlApi + `conduces-desayuno/next`;
        return this.http.get<any>(urlAPI);
    }

    bulkCreate(conduces: any[]): Observable<any> {
        const urlAPI = this.globals.urlApi + `conduces-desayuno/bulk`;
        return this.http.post<any>(urlAPI, conduces);
    }

    getByDate(schoolId: number, from: string, to?: string): Observable<any> {

        let params = new HttpParams()
            .set('from', from);

        params = params.set('schoolId', schoolId);

        if (to) params = params.set('to', to);

        const urlAPI = this.globals.urlApi + `conduces-desayuno/by-date`;
        return this.http.get<any>(urlAPI, { params });
    }

    delete(id: number): Observable<any> {
        const urlAPI = this.globals.urlApi + `conduces-desayuno/delete/${id}`;
        return this.http.delete<any>(urlAPI);
    }

    getData(): Observable<any> {
        const urlAPI = this.globals.urlApi + `conduces-desayuno/data`;
        return this.http.get<any>(urlAPI);
    }

}