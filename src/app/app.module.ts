import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoCountPeopleComponent } from './body/video-count-people/video-count-people.component';
import { VideoCountCarComponent } from './body/video-count-car/video-count-car.component';
import { VideoCountUmbrellaComponent } from './body/video-count-umbrella/video-count-umbrella.component';
import { PicCountPeopleComponent } from './body/pic-count-people/pic-count-people.component';
import {WebcamModule} from 'ngx-webcam';
import {FormsModule} from '@angular/forms';



const routes: Routes = [
  { path: 'countPeopleVideo', component: VideoCountPeopleComponent },
  { path: 'countCarsVideo', component: VideoCountCarComponent },
  { path: 'countUmrellasVideo', component: VideoCountUmbrellaComponent },
  { path: 'countPeoplePic', component: PicCountPeopleComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    VideoCountPeopleComponent,
    VideoCountCarComponent,
    VideoCountUmbrellaComponent,
    PicCountPeopleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    WebcamModule,
    FormsModule,
    
    
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
