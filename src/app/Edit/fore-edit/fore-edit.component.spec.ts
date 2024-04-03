import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeEditComponent } from './fore-edit.component';

describe('ForeEditComponent', () => {
  let component: ForeEditComponent;
  let fixture: ComponentFixture<ForeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeEditComponent]
    });
    fixture = TestBed.createComponent(ForeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
