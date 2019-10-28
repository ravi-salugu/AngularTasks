import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <p>component1 works!</p>
  <h1>
    Type something
  </h1>
  <input type="text" #myInput id="something"><br>
  <button (click)= "onclick(myInput.value)" type="submit" >submit</button>`,
  
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  onclick(value){
    console.log(value);
  }
}
