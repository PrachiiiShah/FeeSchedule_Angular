import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeCardComponent } from './fore-card.component';

describe('ForeCardComponent', () => {
  let component: ForeCardComponent;
  let fixture: ComponentFixture<ForeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeCardComponent]
    });
    fixture = TestBed.createComponent(ForeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
