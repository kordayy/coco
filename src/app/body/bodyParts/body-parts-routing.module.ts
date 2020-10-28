import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VideoCountCarComponent } from "./video-count-car/video-count-car.component";
import { VideoCountPeopleComponent } from "./video-count-people/video-count-people.component";
import { VideoCountUmbrellaComponent } from "./video-count-umbrella/video-count-umbrella.component";

const routes: Routes = [
  { path: "countPeopleVideo", component: VideoCountPeopleComponent },
  { path: "countCarsVideo", component: VideoCountCarComponent },
  { path: "countUmrellasVideo", component: VideoCountUmbrellaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyPartsRoutingModule {}
