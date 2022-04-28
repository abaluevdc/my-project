import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumSpacesPipe } from './pipes/num-spaces.pipe';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomYearInputComponent } from './components/custom-year-input/custom-year-input.component';
import { CustomMonthInputComponent } from './components/custom-month-input/custom-month-input.component';
import {CustomControlComponent} from "./components/custom-control/custom-control.component";
import {CurrencyPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NumSpacesPipe,
    ReactiveFormsComponent,
    CustomYearInputComponent,
    CustomMonthInputComponent,
    CustomControlComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [NumSpacesPipe, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
