import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {

  constructor() { }
  public message5="";
  ngOnInit() {
  }

  @Output()
  public parentevent = new EventEmitter();

  public sendtoGP($event){
    this.parentevent.emit($event);
  }



}
