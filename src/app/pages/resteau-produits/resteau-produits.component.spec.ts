import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResteauProduitsComponent } from './resteau-produits.component';

describe('ResteauProduitsComponent', () => {
  let component: ResteauProduitsComponent;
  let fixture: ComponentFixture<ResteauProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResteauProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResteauProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
