import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4pComponent } from './component4p.component';

describe('Component4pComponent', () => {
  let component: Component4pComponent;
  let fixture: ComponentFixture<Component4pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component4pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component4pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
