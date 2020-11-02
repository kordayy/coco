import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class VideoCountService {

counterPeople: number;
counterUmbrella: number;

  @Output() changePeople: EventEmitter<number> = new EventEmitter();
  @Output() changeUmbrella: EventEmitter<number> = new EventEmitter();
  

  bufferPeopleCounts(counterPeople: number) {
    this.counterPeople = counterPeople;
    this.changePeople.emit(this.counterPeople);
  }


  bufferUmbrellaCounts(counterUmbrella: number) {
    this.counterUmbrella = counterUmbrella;
    this.changeUmbrella.emit(this.counterUmbrella);
  }

}