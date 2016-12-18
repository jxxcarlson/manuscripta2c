import {AppRoutingModule} from '../../app-routing.module'
import { NgModule } from '@angular/core';

import {HomeComponent} from "./home.component";
import {AuthorizationModule} from "../../auth/authorization.module";
import { CommonModule } from '@angular/common';

import {SearchModule} from '../../search/search.module'


@NgModule({

  declarations: [

    HomeComponent
  ],

  imports: [

      AppRoutingModule,
      AuthorizationModule,
      SearchModule,
      CommonModule
    ],

  providers: [


  ],

  exports: [ ]

})
export class HomeModule { }

