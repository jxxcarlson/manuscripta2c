import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NavbarService } from '../navbar/navbar.service'
import { AppState } from '../../state-management/interfaces/appstate.interface';
import {DocumentService} from '../../services/document.service'
import { Store } from '@ngrx/store';
import { User } from '../../state-management/interfaces/user.interface'
import { Observable} from 'rxjs/Rx';
import { pushDocumentOnHistory, clearHistory } from '../../state-management/reducers/action.types'


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
              private store: Store<AppState>,
              private historyStore: Store<History>,
              private router: Router,
              private documentService: DocumentService) {

    this.navbarService = navbarService
    this.store = store
    this.historyStore = historyStore

  }

  toggleSignup() {

    this.signingUp = !this.signingUp
  }

  gotoLastDocument() {

    this.store
      .take(1)
      .subscribe(state => this.router.navigateByUrl(`/documents/${state.user.last_document_id}`))
  }

  ngOnInit() {

    this.user$ = this.store.select(state => state.user)

    /*
    this.user$
      .take(1)
      .subscribe(user => this.historyStore.dispatch(pushDocumentOnHistory({title: user.last_document_title, id: user.last_document_id})))

    */

    this.lastDocumentTitle$ = this.store.select(state => state.user.last_document_title)
    this.signedIn$ = this.store.select(state => state.user.signedIn)

    this.navbarService.updateUIState('home')

    this.store
      .select('user')
      .subscribe((val: Observable<User>)=> [
        this.user$ = val,
        console.log(`userState changed: ${JSON.stringify(this.user$)}`)
      ])
  }

}
