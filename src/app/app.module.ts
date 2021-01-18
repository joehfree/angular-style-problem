import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApkButtonModule } from "./button";

@NgModule({
  imports: [BrowserModule, FormsModule, ApkButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
