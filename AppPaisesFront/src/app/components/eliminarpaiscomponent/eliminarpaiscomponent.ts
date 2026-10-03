import { Component, ChangeDetectorRef } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Paisservice } from "../../service/paisservice";

@Component({
  selector: "app-eliminarpaiscomponent",
  standalone: false,
  styleUrl: "./eliminarpaiscomponent.css",
  templateUrl: "./eliminarpaiscomponent.html"
})
export class Eliminarpaiscomponent {

  metodo: string = "nombre";

  nombre: string = "";
  capital: string = "";

  mensaje: string = "";
  exito: boolean = false;
  codigoHttp: number = 0;

  constructor(
      private paisService: Paisservice,
      private cd: ChangeDetectorRef
  ) {}

  eliminar(): void {
    this.mensaje = "";
    this.codigoHttp = 0;

    if (this.metodo === "nombre") {

      if (this.nombre.trim() === "") {
        this.mensaje = "Debe ingresar el nombre del país.";
        this.exito = false;
        return;
      }

      this.paisService.eliminarPorNombre(this.nombre.trim()).subscribe({
        next: (respuesta) => {
          this.codigoHttp = respuesta.status;
          this.exito = true;
          this.mensaje = "El país se eliminó correctamente.";
          this.nombre = "";
          this.cd.detectChanges();
        },
        error: (error: HttpErrorResponse) => {
          this.exito = false;
          this.codigoHttp = error.status;

          if (error.status === 404) {
            this.mensaje = "No existe un país con ese nombre.";
          } else if (error.status === 400) {
            this.mensaje = "Los datos enviados no son válidos.";
          } else if (error.status === 500) {
            this.mensaje = "Error interno del servidor.";
          } else {
            this.mensaje = "No se pudo eliminar el país.";
          }

          this.cd.detectChanges();
        }
      });

    } else {

      if (this.capital.trim() === "") {
        this.mensaje = "Debe ingresar la capital.";
        this.exito = false;
        return;
      }

      this.paisService.eliminarPorCapital(this.capital.trim()).subscribe({
        next: (respuesta) => {
          this.codigoHttp = respuesta.status;
          this.exito = true;
          this.mensaje = "El país se eliminó correctamente.";
          this.capital = "";
          this.cd.detectChanges();
        },
        error: (error: HttpErrorResponse) => {
          this.exito = false;
          this.codigoHttp = error.status;

          if (error.status === 404) {
            this.mensaje = "No existe un país con esa capital.";
          } else if (error.status === 400) {
            this.mensaje = "Los datos enviados no son válidos.";
          } else if (error.status === 500) {
            this.mensaje = "Error interno del servidor.";
          } else {
            this.mensaje = "No se pudo eliminar el país.";
          }

          this.cd.detectChanges();
        }
      });
    }
  }
}