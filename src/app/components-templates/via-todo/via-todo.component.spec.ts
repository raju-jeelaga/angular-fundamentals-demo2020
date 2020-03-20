import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaTodoComponent } from './via-todo.component';

describe('ViaTodoComponent', () => {
  let component: ViaTodoComponent;
  let fixture: ComponentFixture<ViaTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
