import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable} from 'rxjs/Rx';
import { ActionTypes } from '../../state-management/reducers/action.types'
import { selectDocument, setEditText, clearDocuments, pushDocumentOnHistory, clearHistory } from '../../state-management/reducers/action.types'
import {initialDocument} from '../../state-management/interfaces/document.interface'
import {initialEditState} from '../../state-management/interfaces/editor.interface'

import {DocumentService} from '../../services/document.service'

@Injectable()
export class DocumentEffects {
  constructor(
    private actions$: Actions,
    private docummentService: DocumentService ) {

    this.docummentService = docummentService

  }


  @Effect() addDocumentActions$ = this.actions$
    .ofType(ActionTypes.ADD_DOCUMENT)
    .map(action => selectDocument(action.payload))

  @Effect() deleteDocumentActions$ = this.actions$
    .ofType(ActionTypes.DELETE_DOCUMENT)
    .map(action => selectDocument(initialDocument))

  @Effect() clearAllActions$ = this.actions$
    .ofType(ActionTypes.CLEAR_ALL)
    .map(action => clearDocuments())
    .map(action => selectDocument(initialDocument))

  @Effect() selectDocumentActions$ = this.actions$
    .ofType(ActionTypes.SELECT_DOCUMENT)
    .map(action => pushDocumentOnHistory({
      title: action.payload.title,
      id: action.payload.id,
      foo: 'effects'
    }))

  @Effect() authActions$ = this.actions$
    .ofType(ActionTypes.AUTHORIZE_USER)
    .map(action => clearHistory(action.payload) )



   //  .map(action => clearHistory)
  // if (action.payload.id == -1) {

  /// .subscribe(user => this.historyStore.dispatch(pushDocumentOnHistory({title: user.last_document_title, id: user.last_document_id})))


  ///  pushDocumentOnHistory({title: user.last_document_title, id: user.last_document_id})))


}

