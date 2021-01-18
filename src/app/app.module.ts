import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApkButtonModule } from "./button";
import { ApkModalModule } from "./modal";
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ApkButtonModule, ApkModalModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
