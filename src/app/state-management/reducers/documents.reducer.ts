// https://github.com/ngrx/store
//
export const SET_DOCUMENTS =  'SET_DOCUMENTS'
export const ADD_DOCUMENT =  'ADD_DOCUMENT'
export const GET_DOCUMENTS =  'GET_DOCUMENTS'

import { Document } from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const documentsReducer: ActionReducer<Document[]> =
  (state: Document[] = [], action: Action) => {
  switch (action.type) {
    case SET_DOCUMENTS:
      return action.payload
    case ADD_DOCUMENT:
      return [ ...state, action.payload]
    case GET_DOCUMENTS:
      return state

    default:
      return state;
  }
};
