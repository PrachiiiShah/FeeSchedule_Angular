import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhComponent } from './fh.component';

describe('FhComponent', () => {
  let component: FhComponent;
  let fixture: ComponentFixture<FhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FhComponent]
    });
    fixture = TestBed.createComponent(FhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
