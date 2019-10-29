import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4cComponent } from './component4c.component';

describe('Component4cComponent', () => {
  let component: Component4cComponent;
  let fixture: ComponentFixture<Component4cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component4cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
