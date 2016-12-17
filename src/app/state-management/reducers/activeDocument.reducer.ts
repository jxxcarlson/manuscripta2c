
// https://github.com/ngrx/store
//
export const SELECT_DOCUMENT =  'SELECT_DOCUMENT'
export const UPDATE_DOCUMENT =  'UPDATE_DOCUMENT'

import { Document } from '../interfaces/document.interface'
import {initialDocument} from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';



export const activeDocumentReducer: ActionReducer<Document> = (state: Document = initialDocument, action: Action) => {

  switch (action.type) {
    case SELECT_DOCUMENT:
      return action.payload;
    case UPDATE_DOCUMENT:
      return Object.assign (state, action.payload)
    default:
      return state;
  }

};

