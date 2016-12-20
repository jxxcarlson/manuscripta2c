// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'


import { Document } from '../interfaces/document.interface'
import { AppState } from '../interfaces/appstate.interface'
import {initialDocument} from '../interfaces/document.interface'
import { User, initialUser } from '../interfaces/user.interface'
import { ActionReducer, Action } from '@ngrx/store';



const initialAppState = {
  user: initialUser
}


export const appReducer: ActionReducer<AppState> =
  (state: AppState , action: Action) => {
    switch (action.type) {
      case ActionTypes.SET_DOCUMENTS_AND_SELECT:
        return Object.assign(state,
          {documents: action.payload},
          {activeDocument: action.payload[0]})
      case ActionTypes.ADD_DOCUMENT_AND_SELECT:
        console.log(`ADD_DOCUMENT_AND_SELECT:`)
        return Object.assign(state,
          {
            activeDocument: action.payload,
            documents: [...state.documents, action.payload]
          }
        )
      case  ActionTypes.DELETE_ACTIVE_DOCUMENT:
        var index = state.documents.indexOf(state.activeDocument), newDocumentList, newActiveDocument

        if (index > -1) {
          newDocumentList = state.documents.slice(0, index).concat(state.documents.slice(index + 1))
        }

        if (index > 0) {
          newActiveDocument = state.documents[index-1]
        } else if (index < state.documents.length) {
          newActiveDocument = state.documents[index]
        } else {
          newActiveDocument = initialDocument
        }

        return Object.assign(state, { documents: newDocumentList, activeDocument: newActiveDocument })

      default:
        return state;
    }
  }

// [ ...(Object.assign(state, {activeDocument: action.payload}), action.payload]
/*
 case SET_DOCUMENTS_AND_SELECT:
 console.log(action.payload[0])
 return action.payload
 */
