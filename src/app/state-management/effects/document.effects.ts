import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable} from 'rxjs/Rx';
import { ActionTypes } from '../../state-management/reducers/action.types'
import { selectDocument, setDocuments } from '../../state-management/reducers/action.types'
import {DocumentService} from '../../services/document.service'

@Injectable()
export class DocumentEffects {
  constructor(
    private actions$: Actions,
    private docummentService: DocumentService ) {

    this.docummentService = docummentService

  }


  @Effect() documentActions$ = this.actions$
    .ofType(ActionTypes.ADD_DOCUMENT)
    .map(action => selectDocument(action.payload))

}

