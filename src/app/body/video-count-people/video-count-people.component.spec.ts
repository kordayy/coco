import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCountPeopleComponent } from './video-count-people.component';

describe('VideoCountPeopleComponent', () => {
  let component: VideoCountPeopleComponent;
  let fixture: ComponentFixture<VideoCountPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCountPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCountPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
