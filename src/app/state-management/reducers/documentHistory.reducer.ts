// https://github.com/reactjs/reselect

import {ActionTypes} from './action.types'
import { Document } from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';


export interface State {
  historyList: Document[];
}

const initialState: State = {
  historyList: []
};


export const documentHistoryReducer: ActionReducer<State> =
  (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.PUSH_DOCUMENT_ON_HISTORY:
      return { historyList: [...state.historyList, action.payload] }

    case ActionTypes.CLEAR_HISTORY:
      return initialState

    default:
      return state;
  }
}

export const getHistory = (state: State) => state.historyList;
