import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component4c',
  template: `
               <h2> Scenario 4</h2>
               <button (click)="fireEvent()"> Send Event </button>
  `,
  styleUrls: ['./component4c.component.css']
})
export class Component4cComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output()
  public childEvent = new EventEmitter();
  fireEvent()
  {
    this.childEvent.emit('Message from child to parent using Events');
  }
}
