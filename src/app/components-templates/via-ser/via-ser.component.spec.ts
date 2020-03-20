import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaSerComponent } from './via-ser.component';

describe('ViaSerComponent', () => {
  let component: ViaSerComponent;
  let fixture: ComponentFixture<ViaSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
