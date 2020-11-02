import { Component, OnInit,Input } from "@angular/core";

//import COCO-SSD model as cocoSSD
import * as cocoSSD from "@tensorflow-models/coco-ssd";

@Component({
  selector: "app-video-count-car",
  templateUrl: "./video-count-car.component.html",
  styleUrls: ["./video-count-car.component.css"],
})
export class VideoCountCarComponent implements OnInit {
  title = "TF-ObjectDetection";
  private video: HTMLVideoElement;
  classArray: any[];
  counter: number;

  @Input()
  countCars: number;

  ngOnInit() {}
}
