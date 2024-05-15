import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarpaDetailComponent } from './scarpa-detail.component';

describe('ScarpaDetailComponent', () => {
  let component: ScarpaDetailComponent;
  let fixture: ComponentFixture<ScarpaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScarpaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScarpaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
