import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageInputsComponent } from './wage-inputs.component';

describe('WageInputsComponent', () => {
  let component: WageInputsComponent;
  let fixture: ComponentFixture<WageInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
