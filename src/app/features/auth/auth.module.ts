import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SignupComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatButtonModule
    ]
})
export class AuthModule { }
