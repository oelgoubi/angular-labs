import { Component } from "@angular/core";
import { YoutubersService } from "./youtubers.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "said";

  constructor() {}

  getDescription(youtuber: String) {
    return youtuber + " is the best youtuber in france";
  }
}
