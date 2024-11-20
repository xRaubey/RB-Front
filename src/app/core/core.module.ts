import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';


import {MatButtonModule}  from "@angular/material/button";
import {MatTabsModule}  from "@angular/material/tabs";
import {HeaderComponent} from "./components/header/header.component";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
    MatTabsModule,


  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
