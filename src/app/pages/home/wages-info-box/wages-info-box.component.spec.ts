import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesInfoBoxComponent } from './wages-info-box.component';

describe('WagesComponent', () => {
  let component: WagesInfoBoxComponent;
  let fixture: ComponentFixture<WagesInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagesInfoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WagesInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
