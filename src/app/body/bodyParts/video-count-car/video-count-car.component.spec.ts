import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCountCarComponent } from './video-count-car.component';

describe('VideoCountCarComponent', () => {
  let component: VideoCountCarComponent;
  let fixture: ComponentFixture<VideoCountCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCountCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCountCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
