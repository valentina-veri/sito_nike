import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaScarpeComponent } from './lista-scarpe.component';

describe('ListaScarpeComponent', () => {
  let component: ListaScarpeComponent;
  let fixture: ComponentFixture<ListaScarpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaScarpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaScarpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
