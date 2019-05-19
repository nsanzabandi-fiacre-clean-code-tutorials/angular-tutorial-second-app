import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { DeviceService } from './services/device.service';
import { AuthentificationService } from './services/authentification.service';
import { AuthentificationGuardService } from './services/authentification-guard.service';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DeviceComponent } from './device/device.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceEditionComponent } from './device-edition/device-edition.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthentificationGuardService], component: DevicesViewComponent },
  { path: 'devices/:id', canActivate: [AuthentificationGuardService], component: DeviceDetailsComponent },
  { path: 'deviceEdition', canActivate: [AuthentificationGuardService], component: DeviceEditionComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'users', component: UserListComponent },
  { path: 'newUser', component: NewUserComponent},
  { path: '', component: DevicesViewComponent},
  { path:'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DeviceComponent,
    AuthentificationComponent,
    DevicesViewComponent,
    FourOhFourComponent,
    DeviceDetailsComponent,
    DeviceEditionComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthentificationService,
    AuthentificationGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
