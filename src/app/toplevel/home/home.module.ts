import {AppRoutingModule} from '../../app-routing.module'
import { NgModule } from '@angular/core';

import {HomeComponent} from "./home.component";
import {AuthorizationModule} from "../../auth/authorization.module";
import { CommonModule } from '@angular/common';


@NgModule({

  declarations: [

    HomeComponent
  ],

  imports: [

      AppRoutingModule,
      AuthorizationModule,
      CommonModule
    ],

  providers: [


  ],

  exports: [ ]

})
export class HomeModule { }

