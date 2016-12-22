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
              private store: Store<any>,
              private historyStore: Store<History>,
              private router: Router,
              private documentService: DocumentService) {

    this.navbarService = navbarService
    this.store = store
    //this.historyStore = store.select('history')

  }

  toggleSignup() {

    this.signingUp = !this.signingUp
  }

  gotoLastDocument() {

    this.store
      .take(1)
      .subscribe(state => [
        console.log(`In gotoLastDocument, state.history = ${JSON.stringify(state.history)}`),
        this.store.dispatch(pushDocumentOnHistory(state.history.historyList[0])),
        this.router.navigateByUrl(`/documents/${state.history.historyList[0].id}`)
      ])


    //.subscribe(state => this.router.navigateByUrl(`/documents/${state.user.last_document_id}`))
  }

  ngOnInit() {

    this.user$ = this.store.select(state => state.user)


    this.user$
      .take(1)
      .subscribe(user => {
        if(!user.signedIn) { [
            console.log(`User not signed in, pushing ${user.last_document_title} onto history`),
            this.store.dispatch(pushDocumentOnHistory(
              {title: user.last_document_title, id: user.last_document_id, foo: 'home.2'}))
          ]
      }})




    // this.lastDocumentTitle$ = this.store.select(state => state.history.historyList[0].title)
    this.lastDocumentTitle$ = this.store.select(state => (state.history.historyList == undefined) ? '--': state.history.historyList[0].title)
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
