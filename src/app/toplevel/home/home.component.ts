import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NavbarService } from '../navbar/navbar.service'
import { AppState } from '../../state-management/interfaces/appstate.interface';
import {DocumentService} from '../../services/document.service'
import { Store } from '@ngrx/store';
import { User } from '../../state-management/interfaces/user.interface'
import { Observable} from 'rxjs/Rx';
import { pushDocumentOnHistory } from '../../state-management/reducers/action.types'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<User>
  signingUp: boolean = false;
  signedIn$: Observable<boolean>
  lastDocumentTitle$: Observable<string>

  constructor(private navbarService: NavbarService,
              private userStore: Store<AppState>,
              private router: Router,
              private documentService: DocumentService) {

    this.navbarService = navbarService
    this.userStore = userStore

  }

  toggleSignup() {

    this.signingUp = !this.signingUp
  }

  gotoLastDocument() {

    

    this.userStore
      .take(1)
      .subscribe(state => this.router.navigateByUrl(`/documents/${state.user.last_document_id}`))
  }

  ngOnInit() {

    this.user$ = this.userStore.select(state => state.user)
    this.lastDocumentTitle$ = this.userStore.select(state => state.user.last_document_title)
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
