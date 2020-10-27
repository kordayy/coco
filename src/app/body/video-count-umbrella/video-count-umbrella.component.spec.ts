import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCountUmbrellaComponent } from './video-count-umbrella.component';

describe('VideoCountUmbrellaComponent', () => {
  let component: VideoCountUmbrellaComponent;
  let fixture: ComponentFixture<VideoCountUmbrellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCountUmbrellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCountUmbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
