import { Component, ChangeDetectorRef } from "@angular/core";
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
  idioma: string = "";
  cantidadHabitante: number | null = null;

  mensaje: string = "";
  exito: boolean = false;
  codigoHttp: number = 0;

  constructor(
      private paisService: Paisservice,
      private cd: ChangeDetectorRef
  ) {}

  actualizar(): void {

    this.mensaje = "";
    this.codigoHttp = 0;

    if (this.metodo === "nombre" && this.nombreOriginal.trim() === "") {
      this.mensaje = "Debe ingresar el nombre actual del país.";
      this.exito = false;
      return;
    }

    if (this.metodo === "id" && this.id === null) {
      this.mensaje = "Debe ingresar el ID del país.";
      this.exito = false;
      return;
    }

    if (
        this.nombre.trim() === "" ||
        this.capital.trim() === "" ||
        this.moneda.trim() === "" ||
        this.idioma.trim() === "" ||
        this.cantidadHabitante === null
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
      idioma: this.idioma.trim(),
      cantidadHabitante: this.cantidadHabitante
    };

    if (this.metodo === "nombre") {
      this.actualizarPorNombre(pais);
    } else {
      this.actualizarPorId(pais);
    }
  }

  actualizarPorNombre(pais: Pais): void {

    this.paisService.actualizarPorNombre(
        this.nombreOriginal.trim(),
        pais
    ).subscribe({

      next: (respuesta) => {
        this.codigoHttp = respuesta.status;
        this.exito = true;
        this.mensaje = "El país se actualizó correctamente.";
        this.cd.detectChanges();
      },

      error: (error: HttpErrorResponse) => {
        this.exito = false;
        this.codigoHttp = error.status;

        if (error.status === 404) {
          this.mensaje = "No se encontró el país.";
        } else if (error.status === 400) {
          this.mensaje = "Los datos enviados no son válidos.";
        } else if (error.status === 500) {
          this.mensaje = "Error interno del servidor.";
        } else {
          this.mensaje = "No se pudo actualizar el país.";
        }

        this.cd.detectChanges();
      }
    });
  }

  actualizarPorId(pais: Pais): void {

    this.paisService.actualizarPorId(
        this.id!,
        pais
    ).subscribe({

      next: (respuesta) => {
        this.codigoHttp = respuesta.status;
        this.exito = true;
        this.mensaje = "El país se actualizó correctamente.";
        this.cd.detectChanges();
      },

      error: (error: HttpErrorResponse) => {
        this.exito = false;
        this.codigoHttp = error.status;

        if (error.status === 404) {
          this.mensaje = "No se encontró el país.";
        } else if (error.status === 400) {
          this.mensaje = "Los datos enviados no son válidos.";
        } else if (error.status === 500) {
          this.mensaje = "Error interno del servidor.";
        } else {
          this.mensaje = "No se pudo actualizar el país.";
        }

        this.cd.detectChanges();
      }
    });
  }
}