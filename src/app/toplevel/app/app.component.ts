import {Component } from '@angular/core';

import { Constants } from '../../toplevel/constants'
import { Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store'

import { DocumentService } from '../../services/document.service'

import {AppState} from '../../state-management/interfaces/appstate.interface'
import {clearHistory} from '../../state-management/reducers/action.types'


@Component({
  selector: 'router-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( private documentService: DocumentService,
               private constants: Constants,
               private store: Store<any>) {
''
    this.store = store

    this.documentService = documentService

    // Set initinal list of documents
    this.documentService.loadAndActivateDocument(468)
    // this.documentService.loadDocument(469)
    this.documentService.loadDocument(470)

    this.store.dispatch(clearHistory())

  }


}
