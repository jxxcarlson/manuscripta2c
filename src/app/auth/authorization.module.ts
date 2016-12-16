import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Internal to signin directory:
import { AuthorizationService } from './authorization.service'
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({

  declarations: [

    SigninComponent,
    SignupComponent
  ],

  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],

  providers: [

    AuthorizationService

  ],

  exports: [

    SigninComponent,
    SignupComponent
  ]

})
export class AuthorizationModule { }

// http://juristr.com/blog/2016/09/ng2-serialize-with-json-pipe/
