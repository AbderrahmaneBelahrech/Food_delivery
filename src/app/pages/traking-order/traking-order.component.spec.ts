import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingOrderComponent } from './traking-order.component';

describe('TrakingOrderComponent', () => {
  let component: TrakingOrderComponent;
  let fixture: ComponentFixture<TrakingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrakingOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrakingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
