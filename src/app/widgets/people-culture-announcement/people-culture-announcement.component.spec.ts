import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCultureAnnouncementComponent } from './people-culture-announcement.component';

describe('PeopleCultureAnnouncementComponent', () => {
  let component: PeopleCultureAnnouncementComponent;
  let fixture: ComponentFixture<PeopleCultureAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleCultureAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCultureAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
