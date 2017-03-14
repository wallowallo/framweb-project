import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HjemComponent } from './hjem/hjem.component';
import { SmsComponent } from './sms/sms.component';

import { SmsService } from './_services/sms.service';

import { routing } from './_routing/routing';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HjemComponent,
    SmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [
    SmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
