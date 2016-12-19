
// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'

import { Document } from '../interfaces/document.interface'
import {initialDocument} from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';


export const activeDocumentReducer: ActionReducer<Document> = (state: Document = initialDocument, action: Action) => {

  switch (action.type) {
    case ActionTypes.SELECT_DOCUMENT:
      return action.payload;
    case ActionTypes.UPDATE_DOCUMENT:
      return Object.assign (state, action.payload)
    default:
      return state;
  }

};

