import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
  
  <app-parent5 (parentevent)= "messages = $event"></app-parent5>
  {{messages}}
`,
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {

  constructor() { }

  public messages="";

  ngOnInit() {
  }

}
