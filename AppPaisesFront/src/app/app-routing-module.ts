import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Crearcomponent } from "./components/crearcomponent/crearcomponent";
import { Eliminarpaiscomponent } from "./components/eliminarpaiscomponent/eliminarpaiscomponent";

const routes: Routes = [
    {
        path: "crearPais",
        component: Crearcomponent
    },
    {
        path: "eliminarPais",
        component: Eliminarpaiscomponent
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