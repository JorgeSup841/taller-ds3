import { Component } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Pais } from "../../models/pais/pais";
import { Paisservice } from "../../service/paisservice";

@Component({
  selector: "app-actualizarpaiscomponent",
  standalone: false,
  templateUrl: "./actualizarpaiscomponent.html",
  styleUrl: "./actualizarpaiscomponent.css"
})
export class Actualizarpaiscomponent {

  metodo: string = "nombre";

  nombre: string = "";
  nombreOriginal: string = "";
  id: number | null = null;

  capital: string = "";
  moneda: string = "";
  idiomas: string = "";
  habitantes: number | null = null;

  mensaje: string = "";
  exito: boolean = false;
  codigoHttp: number = 0;

  constructor(private paisService: Paisservice) {}

  actualizar(): void {

    this.mensaje = "";
    this.codigoHttp = 0;

    if (
        this.nombre.trim() === "" ||
        this.capital.trim() === "" ||
        this.moneda.trim() === "" ||
        this.idiomas.trim() === "" ||
        this.habitantes === null
    ) {
      this.mensaje = "Debe completar todos los campos.";
      this.exito = false;
      return;
    }

    const pais: Pais = {
      id: this.id ?? 0,
      nombre: this.nombre.trim(),
      capital: this.capital.trim(),
      moneda: this.moneda.trim(),
      idiomas: this.idiomas.trim(),
      habitantes: this.habitantes
    };

    if (this.metodo === "nombre") {
      this.actualizarPorNombre(pais);
    } else {
      this.actualizarPorId(pais);
    }
  }

  actualizarPorNombre(pais: Pais): void {

    if (this.nombreOriginal.trim() === "") {
      this.mensaje = "Debe ingresar el nombre actual del país.";
      this.exito = false;
      return;
    }

    this.paisService.actualizarPorNombre(
        this.nombreOriginal.trim(),
        pais
    ).subscribe({

      next: () => {
        this.mensaje = "El país fue actualizado correctamente.";
        this.exito = true;
        this.codigoHttp = 200;
      },

      error: (error: HttpErrorResponse) => {
        this.exito = false;
        this.codigoHttp = error.status;

        if (error.status === 404) {
          this.mensaje = "No se encontró un país con ese nombre.";
        } else {
          this.mensaje = "Ocurrió un error al actualizar el país.";
        }

        console.error("Error al actualizar por nombre:", error);
      }

    });
  }

  actualizarPorId(pais: Pais): void {

    if (this.id === null) {
      this.mensaje = "Debe ingresar el ID del país.";
      this.exito = false;
      return;
    }

    this.paisService.actualizarPorId(
        this.id,
        pais
    ).subscribe({

      next: () => {
        this.mensaje = "El país fue actualizado correctamente.";
        this.exito = true;
        this.codigoHttp = 200;
      },

      error: (error: HttpErrorResponse) => {
        this.exito = false;
        this.codigoHttp = error.status;

        if (error.status === 404) {
          this.mensaje = "No se encontró un país con ese ID.";
        } else {
          this.mensaje = "Ocurrió un error al actualizar el país.";
        }

        console.error("Error al actualizar por ID:", error);
      }

    });
  }
}