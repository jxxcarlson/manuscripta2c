import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NavbarService } from '../navbar/navbar.service'
import { AppState } from '../../state-management/interfaces/appstate.interface';
import { Store } from '@ngrx/store';
import { User } from '../../state-management/interfaces/user.interface'
import { Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<User>
  signingUp: boolean = false;
  signedIn$: Observable<boolean>

  constructor(private navbarService: NavbarService,
              private userStore: Store<AppState>,
              private router: Router) {

    this.navbarService = navbarService
    this.userStore = userStore

  }

  toggleSignup() {

    this.signingUp = !this.signingUp
  }

  gotoLastDocument() {

    this.user$
      .take(1)
      .subscribe(user => this.router.navigateByUrl(`/documents/#{user.last_document_id}`))
  }

  ngOnInit() {

    this.user$ = this.userStore.select(state => state.user)
    this.signedIn$ = this.userStore.select(state => state.user.signedIn)

    this.navbarService.updateUIState('home')

    this.userStore
      .select('user')
      .subscribe((val: Observable<User>)=> [
        this.user$ = val,
        console.log(`userState changed: ${JSON.stringify(this.user$)}`)
      ])
  }

}
