import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VideoCountCarComponent } from "./video-count-car/video-count-car.component";
import { VideoCountPeopleComponent } from "./video-count-people/video-count-people.component";
import { VideoCountUmbrellaComponent } from "./video-count-umbrella/video-count-umbrella.component";
import { VideoComponent } from "./video/video.component";

const routes: Routes = [
  { path: "videoModuleCar", component: VideoComponent },
  { path: "videoModulePeople", component: VideoComponent },
  { path: "videoModuleUmbrella", component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyPartsRoutingModule {}
