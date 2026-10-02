import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Pais } from "../../models/pais/pais";
import { Paisservice } from "../../service/paisservice";

@Component({
  selector: "app-mostrarpaiscomponent",
  standalone: false,
  templateUrl: "./mostrarpaiscomponent.html",
  styleUrl: "./mostrarpaiscomponent.css"
})
export class Mostrarpaiscomponent implements OnInit {

  paises: Pais[] = [];
  mensaje: string = "";
  codigoHttp: number = 0;

  constructor(private paisService: Paisservice) {}

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(): void {

    this.paisService.mostrar().subscribe({

      next: (paises: Pais[]) => {
        this.paises = paises;
        this.codigoHttp = 200;
        this.mensaje = "";
      },

      error: (error: HttpErrorResponse) => {
        this.paises = [];
        this.codigoHttp = error.status;
        this.mensaje = "Ocurrió un error al cargar los países.";

        console.error("Error al mostrar países:", error);
      }

    });
  }
}