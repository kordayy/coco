import { Component, OnInit } from "@angular/core";
import { VideoCountService } from "../services/video-count.service";

//import COCO-SSD model as cocoSSD
import * as cocoSSD from "@tensorflow-models/coco-ssd";
import {
  ActivatedRoute,
  PRIMARY_OUTLET,
  Router,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from "@angular/router";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"],
})
export class VideoComponent implements OnInit {
  title = "TF-ObjectDetection";
  private video: HTMLVideoElement;
  classArray: any[];
  counterPerson: number;
  counterCar: number;
  counterUmbrella: number;
  nameOfCountedObject: string;

  constructor(
    private videoCountService: VideoCountService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const tree: UrlTree = router.parseUrl("/bodyParts");

    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
  }

  isUmbrellaRoute() {
    return this.router.url.includes("/videoModuleUmbrella");
  }
  isPersonRoute() {
    return this.router.url.includes("/videoModulePeople");
  }
  isCarRoute() {
    return this.router.url.includes("/videoModuleCar");
  }

  isRouteName() {
    if (this.router.url.includes("/videoModuleUmbrella")) {
      return this.nameOfCountedObject = "Umbrella";
    }
    if (this.router.url.includes("/videoModulePeople")) {
      return this.nameOfCountedObject = "Personen";
    }
    if (this.router.url.includes("/videoModuleCar")) {
     return this.nameOfCountedObject = "Autos";
    }
  }

  ngOnInit() {
    this.webcam_init();
    this.predictWithCocoModel();
    // this.route.parent.url.subscribe((url) => console.log(url[0].path));
    // this.route.fragment.subscribe(res =>{
    //   console.log(res);
    // });
    // this.route.children[0].subscribe(res =>{
    //   console.log(res);
    // });
    // console.log(g);
    console.log(this.router.url);
  }

  public async predictWithCocoModel() {
    const model = await cocoSSD.load("lite_mobilenet_v2");
    this.detectFrame(this.video, model);
    console.log("model loaded");
  }

  webcam_init() {
    this.video = <HTMLVideoElement>document.getElementById("vid");

    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
        },
      })
      .then((stream) => {
        this.video.srcObject = stream;
        this.video.onloadedmetadata = () => {
          this.video.play();
        };
      });
  }

  detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  renderPredictions = (predictions) => {
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");

    const ctx = canvas.getContext("2d");
    console.log(predictions);
    canvas.width = 300;
    canvas.height = 300;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.drawImage(this.video, 0, 0, 300, 300);

    predictions.forEach((prediction) => {
      // console.log(predictions);
      //this.classArray.push(prediction.class)
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 40);
    });

    predictions.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
    let countP = 0;
    let countC = 0;
    let countU = 0;

    predictions.forEach((prediction) => {
      if (prediction.class === "person") {
        countP++;
      }
      if (prediction.class === "car") {
        countC++;
      }
      if (prediction.class === "umbrella") {
        countU++;
      }
      // console.log(predictions);

      console.log(prediction.class + "  " + prediction.score);

      //console.log(this.classArray);
    });

    this.counterCar = countC;
    this.counterPerson = countP;
    this.counterUmbrella = countU;

    //console.log("personen " + countP + "\n regenschirme " + countU);
    this.videoCountService.bufferPeopleCounts(countP);
    this.videoCountService.bufferUmbrellaCounts(countU);
  };
}
