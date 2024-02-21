import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USDAComponent } from './usda.component';

describe('USDAComponent', () => {
  let component: USDAComponent;
  let fixture: ComponentFixture<USDAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [USDAComponent]
    });
    fixture = TestBed.createComponent(USDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
