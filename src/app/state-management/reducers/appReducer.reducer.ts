// https://github.com/ngrx/store
//
export const SET_DOCUMENTS_AND_SELECT =  'SET_DOCUMENTS_AND_SELECT'
export const ADD_DOCUMENT_AND_SELECT =  'ADD_DOCUMENT_AND_SELECT'


import { Document } from '../interfaces/document.interface'
import { AppState } from '../interfaces/appstate.interface'
import {intialUser} from '../interfaces/user.interface'
import { ActionReducer, Action } from '@ngrx/store';

const process = (document: Document) => Object.assign(document, {rendered_text: document.rendered_text.replace(/<a href="#/g, '<a pageScroll href="#')})


const initialAppState = {
  user: intialUser
}


export const appReducer: ActionReducer<AppState> =
  (state: AppState , action: Action) => {

    console.log(`STATE: ${state}`)
    switch (action.type) {
      case SET_DOCUMENTS_AND_SELECT:
        return Object.assign(state,
          {documents: action.payload},
          {activeDocument: process(action.payload[0])})
      case ADD_DOCUMENT_AND_SELECT:
        return Object.assign(state,
          {
            activeDocument: process(action.payload),
            documents: [...state.documents, process(action.payload)]
          }
        )
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
