import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
