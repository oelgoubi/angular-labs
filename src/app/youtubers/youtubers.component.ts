import { Component } from "@angular/core";
import { YoutubersService } from "../youtubers.service";

@Component({
  selector: "app-youtubers",
  templateUrl: "./youtubers.component.html",
  styleUrls: ["./youtubers.component.css"]
})
export class YoutubersComponent {
  youtubers = [];

  constructor(private readonly youtuberService: YoutubersService) {
    this.youtubers = this.youtuberService.getListYoutubers();
  }

  onNotify({ channelName }) {
    console.log(
      `notified from the child that the channel ${channelName} has been liked !`
    );
  }
}
