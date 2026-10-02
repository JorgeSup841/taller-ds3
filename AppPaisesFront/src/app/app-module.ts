import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { Navbarcomponent } from "./components/navbarcomponent/navbarcomponent";
import { Footercomponent } from "./components/footercomponent/footercomponent";
import { Contentcomponent } from "./components/contentcomponent/contentcomponent";

import { FormsModule } from "@angular/forms";
import { Crearcomponent } from "./components/crearcomponent/crearcomponent";

@NgModule({
  declarations: [
    App,
    Navbarcomponent,
    Footercomponent,
    Contentcomponent,
    Crearcomponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
