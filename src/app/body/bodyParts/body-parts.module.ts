import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VideoCountCarComponent } from "./video-count-car/video-count-car.component";
import { VideoCountPeopleComponent } from "./video-count-people/video-count-people.component";
import { VideoCountUmbrellaComponent } from "./video-count-umbrella/video-count-umbrella.component";
import { BodyPartsRoutingModule } from "./body-parts-routing.module";

@NgModule({
  imports: [CommonModule, BodyPartsRoutingModule
  ],
  declarations: [
    VideoCountCarComponent,
    VideoCountPeopleComponent,
    VideoCountUmbrellaComponent,
  ],
})
export class BodyPartsModule {}
