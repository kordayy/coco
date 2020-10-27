import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicCountPeopleComponent } from './pic-count-people.component';

describe('PicCountPeopleComponent', () => {
  let component: PicCountPeopleComponent;
  let fixture: ComponentFixture<PicCountPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicCountPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicCountPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
