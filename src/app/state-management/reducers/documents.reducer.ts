// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { Document } from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const documentsReducer: ActionReducer<Document[]> =
  (state: Document[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DOCUMENTS:
      return action.payload
    case ActionTypes.ADD_DOCUMENT:
      return [ ...state, action.payload]
    case ActionTypes.DELETE_DOCUMENT:
      var index = state.indexOf(action.payload), newDocumentList
      if (index > -1) {
        newDocumentList = state.slice(0, index).concat(state.slice(index + 1))
      }
      return newDocumentList
    case ActionTypes.GET_DOCUMENTS:
      return state

    default:
      return state;
  }
};
