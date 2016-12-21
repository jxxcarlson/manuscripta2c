// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'


// import { Document } from '../interfaces/document.interface'
import { AppState } from '../interfaces/appstate.interface'
// import {initialDocument} from '../interfaces/document.interface'
// import { User, initialUser } from '../interfaces/user.interface'
import { ActionReducer, Action } from '@ngrx/store';


import {initialAppState} from '../interfaces/appstate.interface'

export const appReducer: ActionReducer<AppState> =
  (state: AppState = initialAppState, action: Action) => {
    switch (action.type) {
      case ActionTypes.SET_DOCUMENTS_AND_SELECT:
        return Object.assign(state,
          {documents: action.payload},
          {activeDocument: action.payload[0]})
      case ActionTypes.CLEAR_ALL:
        return initialAppState
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
