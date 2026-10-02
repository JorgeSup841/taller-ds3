import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Crearcomponent} from "./components/crearcomponent/crearcomponent";


const routes: Routes = [
    {path: 'crearPais', component: Crearcomponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
