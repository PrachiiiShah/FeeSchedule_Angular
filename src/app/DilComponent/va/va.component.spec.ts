import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAComponent } from './va.component';

describe('VAComponent', () => {
  let component: VAComponent;
  let fixture: ComponentFixture<VAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VAComponent]
    });
    fixture = TestBed.createComponent(VAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
