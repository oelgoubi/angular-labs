import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GreetingComponent } from "./greeting/greeting.component";
import { YoutubersService } from "./youtubers.service";
import { AddYoutuberComponent } from "./add-youtuber/add-youtuber.component";
import { YoutubersComponent } from "./youtubers/youtubers.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: AppComponent },
      { path: "youtubers", component: YoutubersComponent },
      { path: "add-youtuber", component: AddYoutuberComponent }
    ])
  ],
  declarations: [
    AppComponent,
    GreetingComponent,
    AddYoutuberComponent,
    YoutubersComponent
  ],
  bootstrap: [AppComponent],
  providers: [YoutubersService]
})
export class AppModule {}
