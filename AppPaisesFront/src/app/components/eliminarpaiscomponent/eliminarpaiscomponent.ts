import { Component } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Paisservice } from "../../service/paisservice";

@Component({
  selector: "app-eliminarpaiscomponent",
  standalone: false,
  styleUrl: "./eliminarpaiscomponent.css",
  templateUrl: "./eliminarpaiscomponent.html",
})
export class Eliminarpaiscomponent {

  metodo: string = "nombre";

  nombre: string = "";
  capital: string = "";

  mensaje: string = "";
  exito: boolean = false;
  codigoHttp: number = 0;

  constructor(private paisService: Paisservice) {}

  eliminar(): void {

    this.mensaje = "";
    this.codigoHttp = 0;

    if (this.metodo === "nombre") {
      this.eliminarPorNombre();
    } else {
      this.eliminarPorCapital();
    }
  }

  eliminarPorNombre(): void {

    if (this.nombre.trim() === "") {
      this.mensaje = "Debe ingresar el nombre del país.";
      this.exito = false;
      return;
    }

    this.paisService.eliminarPorNombre(this.nombre.trim()).subscribe({

      next: () => {
        this.mensaje = "El país fue eliminado correctamente.";
        this.exito = true;
        this.codigoHttp = 200;
        this.nombre = "";
      },

      error: (error: HttpErrorResponse) => {
        this.exito = false;
        this.codigoHttp = error.status;

        if (error.status === 404) {
          this.mensaje = "No se encontró un país con ese nombre.";
        } else {
          this.mensaje = "Ocurrió un error al eliminar el país.";
        }

        console.error("Error al eliminar por nombre:", error);
      }

    });
  }

  eliminarPorCapital(): void {

    if (this.capital.trim() === "") {
      this.mensaje = "Debe ingresar la capital.";
      this.exito = false;
      return;
    }

    this.paisService.eliminarPorCapital(this.capital.trim()).subscribe({

      next: () => {
        this.mensaje = "El país fue eliminado correctamente.";
        this.exito = true;
        this.codigoHttp = 200;
        this.capital = "";
      },

      error: (error: HttpErrorResponse) => {
        this.exito = false;
        this.codigoHttp = error.status;

        if (error.status === 404) {
          this.mensaje = "No se encontró un país con esa capital.";
        } else {
          this.mensaje = "Ocurrió un error al eliminar el país.";
        }

        console.error("Error al eliminar por capital:", error);
      }

    });
  }
}