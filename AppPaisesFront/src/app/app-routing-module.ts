import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Contentcomponent } from "./components/contentcomponent/contentcomponent";
import { Crearcomponent } from "./components/crearcomponent/crearcomponent";
import { Eliminarpaiscomponent } from "./components/eliminarpaiscomponent/eliminarpaiscomponent";
import { Actualizarpaiscomponent } from "./components/actualizarpaiscomponent/actualizarpaiscomponent";
import { Mostrarpaiscomponent } from "./components/mostrarpaiscomponent/mostrarpaiscomponent";

const routes: Routes = [

    {
        path: "",
        component: Contentcomponent
    },

    {
        path: "mostrarPais",
        component: Mostrarpaiscomponent
    },

    {
        path: "crearPais",
        component: Crearcomponent
    },

    {
        path: "eliminarPais",
        component: Eliminarpaiscomponent
    },

    {
        path: "actualizarPais",
        component: Actualizarpaiscomponent
    },

    {
        path: "**",
        redirectTo: ""
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}