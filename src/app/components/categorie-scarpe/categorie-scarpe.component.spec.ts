import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieScarpeComponent } from './categorie-scarpe.component';

describe('CategorieScarpeComponent', () => {
  let component: CategorieScarpeComponent;
  let fixture: ComponentFixture<CategorieScarpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorieScarpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieScarpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
