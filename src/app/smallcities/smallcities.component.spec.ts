import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcitiesComponent } from './smallcities.component';

describe('SmallcitiesComponent', () => {
  let component: SmallcitiesComponent;
  let fixture: ComponentFixture<SmallcitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
