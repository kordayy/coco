import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BodyComponent } from "./body/body.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";

import { PicCountPeopleComponent } from "./body/pic-count-people/pic-count-people.component";
import { WebcamModule } from "ngx-webcam";
import { FormsModule } from "@angular/forms";

import { BodyPartsModule } from "./body/bodyParts/body-parts.module";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    PicCountPeopleComponent,
  ],
  imports: [BrowserModule, WebcamModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
