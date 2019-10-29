import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child5',
  template: `
                <button (click)="fEvent()"> Scenario 5 Trigger </button>
                `,
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  constructor() { }
  @Output()
  public childEvent1=new EventEmitter();
  ngOnInit() {
  }
  fEvent(){
    this.childEvent1.emit("Message from Child Component");
  }

}
