// https://github.com/ngrx/store
//
export const SET_DOCUMENTS_AND_SELECT =  'SET_DOCUMENTS_AND_SELECT'
export const ADD_DOCUMENT_AND_SELECT =  'ADD_DOCUMENT_AND_SELECT'
export const DELETE_ACTIVE_DOCUMENT =  'DELETE_ACTIVE_DOCUMENT'


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

    console.log(`STATE: ${state}`)
    switch (action.type) {
      case SET_DOCUMENTS_AND_SELECT:
        return Object.assign(state,
          {documents: action.payload},
          {activeDocument: action.payload[0]})
      case ADD_DOCUMENT_AND_SELECT:
        return Object.assign(state,
          {
            activeDocument: action.payload,
            documents: [...state.documents, action.payload]
          }
        )
      case DELETE_ACTIVE_DOCUMENT:
        var index = state.documents.indexOf(state.activeDocument)
        if (index > -1) { state.documents.splice(index, 1) }
        if (index > 0) {
          state.activeDocument = state.documents[index-1]
        } else if (index < state.documents.length) {
          state.activeDocument = state.documents[index]
        } else {
          state.activeDocument = initialDocument
        }
        return state

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
