import { Component } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Pais } from "../../models/pais/pais";
import { Paisservice } from "../../service/paisservice";

@Component({
    selector: "app-crearcomponent",
    standalone: false,
    styleUrl: "./crearcomponent.css",
    templateUrl: "./crearcomponent.html",
})
export class Crearcomponent {

    pais: Pais = {
        id: 0,
        nombre: "",
        capital: "",
        moneda: "",
        idiomas: "",
        habitantes: 0
    };

    mensaje: string = "";
    exito: boolean = false;
    codigoHttp: number = 0;

    constructor(private paisService: Paisservice) {}

    crear(): void {

        this.mensaje = "";
        this.codigoHttp = 0;

        if (
            this.pais.nombre.trim() === "" ||
            this.pais.capital.trim() === "" ||
            this.pais.moneda.trim() === "" ||
            this.pais.idiomas.trim() === "" ||
            this.pais.habitantes < 0
        ) {
            this.mensaje = "Debe completar todos los campos.";
            this.exito = false;
            return;
        }

        this.paisService.crear(this.pais).subscribe({

            next: () => {
                this.mensaje = "El país fue creado correctamente.";
                this.exito = true;
                this.codigoHttp = 200;

                this.pais = {
                    id: 0,
                    nombre: "",
                    capital: "",
                    moneda: "",
                    idiomas: "",
                    habitantes: 0
                };
            },

            error: (error: HttpErrorResponse) => {
                this.exito = false;
                this.codigoHttp = error.status;

                if (error.status === 400) {
                    this.mensaje = "Los datos del país no son válidos.";
                } else if (error.status === 409) {
                    this.mensaje = "El país ya existe.";
                } else {
                    this.mensaje = "Ocurrió un error al crear el país.";
                }

                console.error("Error al crear país:", error);
            }

        });
    }
}