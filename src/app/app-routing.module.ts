import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PicCountPeopleComponent } from "./body/pic-count-people/pic-count-people.component";


const routes: Routes = [
    {path: '', redirectTo: 'countPeoplePic', pathMatch: 'full'},
    { path: "countPeoplePic", component: PicCountPeopleComponent },
  {
    path: "bodyParts",
    loadChildren: "./body/bodyParts/body-parts.module#BodyPartsModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
