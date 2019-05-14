import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DeviceComponent } from './device/device.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';

import { DeviceService } from './services/device.service';
import { AuthentificationService } from './services/authentification.service';

const appRoutes: Routes = [
  { path: 'devices', component: DevicesViewComponent },
  { path: 'authentification', component: AuthentificationComponent},
  { path: '', component: DevicesViewComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DeviceComponent,
    AuthentificationComponent,
    DevicesViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
