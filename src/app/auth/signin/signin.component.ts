import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../state-management/interfaces/user.interface'
import { AppState } from '../../state-management/interfaces/appstate.interface';
import { AuthorizationService } from '../authorization.service'
import { Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  // username$: Observable<string>
  user$: Observable<User>


  constructor(private _fb: FormBuilder,
              private authorizationService: AuthorizationService,
              private userStore: Store<AppState>
  ) {

    this.authorizationService = authorizationService
  }

  signOut() {

    this.authorizationService.signout()
  }


  ngOnInit() {

    this.user$ = this.userStore.select(state => state.user)

    this.myForm = this._fb.group({
       username: ['', [<any>Validators.required, <any>Validators.minLength(0)]],
       password: ['', [<any>Validators.required, <any>Validators.minLength(0)]],

    });

    // subscribe to form changes
    this.subscribeToFormChanges();

    // Update single value
    (<FormControl>this.myForm.controls['username'])
      .setValue('', { onlySelf: true });

  }

  subscribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    this.authorizationService.signin(model.username, model.password)
    //  .subscribe( (x) => console.log(`Response: ${x}`))
  }

}

/*
 this.userStore
 .select('user')
 .subscribe((val: Observable<User>)=> [
 this.user$ = val,
 console.log(`userState changed: ${JSON.stringify(this.user$)}`)
 ])
 */

// An Observable: this.user$ = this.userStore.select('user')

