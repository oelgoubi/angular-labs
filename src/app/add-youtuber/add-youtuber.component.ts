import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { YoutubersService } from "../youtubers.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-youtuber",
  templateUrl: "./add-youtuber.component.html",
  styleUrls: ["./add-youtuber.component.css"]
})
export class AddYoutuberComponent {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private readonly youtuberService: YoutubersService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      followers: 0,
      description: ""
    });
  }

  onSubmit(data) {
    // Process checkout data here
    console.warn("Your new favourite Youtuber has been submitted", data);

    // Validate DATA : Important Step

    // Add the new Youtuber to the service
    this.youtuberService.addYoutuber(data);
    this.checkoutForm.reset();

    // Redirect to the Youtubers List PAGE
    this.router.navigate(["/youtubers"]);
  }
}
