import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-greeting",
  templateUrl: "./greeting.component.html",
  styleUrls: ["./greeting.component.css"]
})
export class GreetingComponent {
  @Input() youtubers;
  @Output() notify = new EventEmitter();

  constructor() {}

  like(channelName) {
    console.log("I liked the youtube channel called : " + channelName);
    this.notify.emit({ channelName });
  }
}
