import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AngularTokenModule } from 'angular-token';

import { AppSettings } from '../app.settings';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  declarations: [
  	LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    AngularTokenModule.forRoot({
      apiBase: AppSettings.API_BASE,
      signOutFailedValidate: true
    })
  ],
  providers: [ AuthenticationService ]
})
export class AuthenticationModule { }
