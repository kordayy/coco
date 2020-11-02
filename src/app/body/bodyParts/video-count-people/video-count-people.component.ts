import { Component, OnInit, OnChanges, HostBinding } from "@angular/core";
import { VideoCountService } from '../services/video-count.service';

//import COCO-SSD model as cocoSSD
import * as cocoSSD from "@tensorflow-models/coco-ssd";
import { from } from "rxjs";

@Component({
  selector: "app-video-count-people",
  templateUrl: "./video-count-people.component.html",
  styleUrls: ["./video-count-people.component.css"],
})
export class VideoCountPeopleComponent implements OnInit {
  title = "TF-ObjectDetection";
  private video: HTMLVideoElement;
  classArray: any[];
  peopleCounted: number;

  // @HostBinding("class.is-open")
  // isOpen = false;

  constructor(private videoCountService: VideoCountService) {}

  ngOnInit() {
    this.videoCountService.changePeople.subscribe((people) => {
      console.log(people);
      this.peopleCounted = people;
     });
  }

}
