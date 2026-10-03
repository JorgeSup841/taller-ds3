import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpParams,
    HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

import { Pais } from "../models/pais/pais";

@Injectable({
    providedIn: "root"
})
export class Paisservice {

    private url = "http://localhost:8080/pais";

    constructor(private http: HttpClient) {}

    mostrar(): Observable<Pais[]> {
        return this.http.get<Pais[]>(`${this.url}/mostrar`);
    }

    contar(): Observable<number> {
        return this.http.get<number>(`${this.url}/contar`);
    }

    crear(pais: Pais): Observable<HttpResponse<string>> {
        return this.http.post(
            `${this.url}/crear`,
            pais,
            {
                observe: "response",
                responseType: "text"
            }
        );
    }

    eliminarPorId(id: number): Observable<HttpResponse<string>> {
        const params = new HttpParams().set("id", id);

        return this.http.delete(
            `${this.url}/eliminarporid`,
            {
                params,
                observe: "response",
                responseType: "text"
            }
        );
    }

    eliminarPorNombre(nombre: string): Observable<HttpResponse<string>> {
        const params = new HttpParams().set("nombre", nombre);

        return this.http.delete(
            `${this.url}/eliminarpornombre`,
            {
                params,
                observe: "response",
                responseType: "text"
            }
        );
    }

    eliminarPorCapital(capital: string): Observable<HttpResponse<string>> {
        const params = new HttpParams().set("capital", capital);

        return this.http.delete(
            `${this.url}/eliminarporcapital`,
            {
                params,
                observe: "response",
                responseType: "text"
            }
        );
    }

    actualizarPorId(id: number, pais: Pais): Observable<HttpResponse<string>> {
        const params = new HttpParams().set("id", id);

        return this.http.put(
            `${this.url}/actualizarporid`,
            pais,
            {
                params,
                observe: "response",
                responseType: "text"
            }
        );
    }

    actualizarPorNombre(nombre: string, pais: Pais): Observable<HttpResponse<string>> {
        const params = new HttpParams().set("nombre", nombre);

        return this.http.put(
            `${this.url}/actualizarpornombre`,
            pais,
            {
                params,
                observe: "response",
                responseType: "text"
            }
        );
    }
}