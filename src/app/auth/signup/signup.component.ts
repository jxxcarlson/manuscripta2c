import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../state-management/interfaces/user.interface'
import { AppState } from '../../state-management/interfaces/appstate.interface';
import { AuthorizationService } from '../authorization.service'
import { Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store';

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(
    private _fb: FormBuilder,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {

    this.myForm = this._fb.group({
      username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      email : ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
      password2: ['', [<any>Validators.required, <any>Validators.minLength(8)]]
    });

  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    console.log(`username: ${model.username}, email: ${model.email}, password: ${model.password}`)
    this.authorizationService.signup(model.username, model.email, model.password)
  }

}
