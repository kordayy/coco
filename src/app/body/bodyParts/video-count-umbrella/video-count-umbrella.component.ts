import { Component, OnInit } from "@angular/core";

//import COCO-SSD model as cocoSSD
import * as cocoSSD from "@tensorflow-models/coco-ssd";
import { VideoCountService } from "../services/video-count.service";

@Component({
  selector: "app-video-count-umbrella",
  templateUrl: "./video-count-umbrella.component.html",
  styleUrls: ["./video-count-umbrella.component.css"],
})
export class VideoCountUmbrellaComponent implements OnInit {
  title = "TF-ObjectDetection";
  private video: HTMLVideoElement;
  classArray: any[];
  umbrellaCounted: number;

  constructor(private videoCountService: VideoCountService) {}

  ngOnInit() {
    this.videoCountService.changeUmbrella.subscribe((umbrella) => {
      this.umbrellaCounted = umbrella;
    });
  }
}
