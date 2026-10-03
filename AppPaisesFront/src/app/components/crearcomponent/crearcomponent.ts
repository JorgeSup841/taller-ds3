import { Component, ChangeDetectorRef } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Pais } from "../../models/pais/pais";
import { Paisservice } from "../../service/paisservice";

@Component({
    selector: "app-crearcomponent",
    standalone: false,
    styleUrl: "./crearcomponent.css",
    templateUrl: "./crearcomponent.html"
})
export class Crearcomponent {

    pais: Pais = {
        id: 0,
        nombre: "",
        capital: "",
        moneda: "",
        idioma: "",
        cantidadHabitante: 0
    };

    mensaje: string = "";
    exito: boolean = false;
    codigoHttp: number = 0;

    constructor(
        private paisService: Paisservice,
        private cd: ChangeDetectorRef
    ) {}

    crear(): void {
        this.mensaje = "";
        this.codigoHttp = 0;

        if (
            this.pais.nombre.trim() === "" ||
            this.pais.capital.trim() === "" ||
            this.pais.moneda.trim() === "" ||
            this.pais.idioma.trim() === "" ||
            this.pais.cantidadHabitante <= 0
        ) {
            this.mensaje = "Debe completar todos los campos.";
            this.exito = false;
            this.cd.detectChanges();
            return;
        }

        this.paisService.crear(this.pais).subscribe({
            next: (respuesta) => {
                this.codigoHttp = respuesta.status;
                this.exito = true;
                this.mensaje = "El país se creó correctamente.";

                this.pais = {
                    id: 0,
                    nombre: "",
                    capital: "",
                    moneda: "",
                    idioma: "",
                    cantidadHabitante: 0
                };

                this.cd.detectChanges();
            },
            error: (error: HttpErrorResponse) => {
                this.exito = false;
                this.codigoHttp = error.status;

                if (error.status === 400) {
                    this.mensaje = "Los datos enviados no son válidos.";
                } else if (error.status === 409) {
                    this.mensaje = "El país ya existe.";
                } else if (error.status === 500) {
                    this.mensaje = "Error interno del servidor.";
                } else {
                    this.mensaje = "No se pudo crear el país.";
                }

                this.cd.detectChanges();
            }
        });
    }
}