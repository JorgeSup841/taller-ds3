import { Component, OnInit,ChangeDetectorRef,inject } from "@angular/core";
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

  cdr = inject(ChangeDetectorRef);
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

        console.log("PAISES RECIBIDOS:", paises);

        this.paises = paises;
        this.codigoHttp = 200;
        this.mensaje = "";

        this.cdr.detectChanges();

      },

      error: (error: HttpErrorResponse) => {

        console.error("ERROR COMPLETO:", error);

        this.paises = [];
        this.codigoHttp = error.status;
        this.mensaje = "Ocurrió un error al cargar los países.";

      }

    });
  }
}