import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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

    crear(pais: Pais): Observable<any> {
        return this.http.post(
            `${this.url}/crear`,
            pais
        );
    }

    eliminarPorId(id: number): Observable<any> {
        return this.http.delete(
            `${this.url}/eliminarporid/${id}`
        );
    }

    eliminarPorNombre(nombre: string): Observable<any> {
        return this.http.delete(
            `${this.url}/eliminarpornombre/${encodeURIComponent(nombre)}`
        );
    }

    eliminarPorCapital(capital: string): Observable<any> {
        return this.http.delete(
            `${this.url}/eliminarporcapital/${encodeURIComponent(capital)}`
        );
    }

    actualizarPorId(id: number, pais: Pais): Observable<any> {
        return this.http.put(
            `${this.url}/actualizarporid/${id}`,
            pais
        );
    }

    actualizarPorNombre(nombre: string, pais: Pais): Observable<any> {
        return this.http.put(
            `${this.url}/actualizarpornombre/${encodeURIComponent(nombre)}`,
            pais
        );
    }
}