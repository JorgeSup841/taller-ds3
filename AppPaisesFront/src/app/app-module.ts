import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { Navbarcomponent } from "./components/navbarcomponent/navbarcomponent";
import { Footercomponent } from "./components/footercomponent/footercomponent";
import { Contentcomponent } from "./components/contentcomponent/contentcomponent";
import { Eliminarpaiscomponent } from "./components/eliminarpaiscomponent/eliminarpaiscomponent";

@NgModule({
  declarations: [
    App,
    Navbarcomponent,
    Footercomponent,
    Contentcomponent,
    Eliminarpaiscomponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    provideBrowserGlobalErrorListeners()
  ],

  bootstrap: [App],
})
export class AppModule {}