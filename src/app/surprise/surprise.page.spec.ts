import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurprisePage } from './surprise.page';

describe('SurprisePage', () => {
  let component: SurprisePage;
  let fixture: ComponentFixture<SurprisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SurprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
