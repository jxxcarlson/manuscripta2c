// https://github.com/reactjs/reselect

import {ActionTypes} from './action.types'
import { Document } from '../interfaces/document.interface'
import { ActionReducer, Action } from '@ngrx/store';
import { DocumentHistory, initialHistoryState } from '../interfaces/history.interface'

export const documentHistoryReducer: ActionReducer<DocumentHistory> =
  (state: DocumentHistory = initialHistoryState, action: Action) => {
  switch (action.type) {
    case ActionTypes.PUSH_DOCUMENT_ON_HISTORY:

      console.log(`PAYLOAD: ${JSON.stringify(action.payload)}`)

      console.log(`HL: ${state.historyList}`)


      console.log(`IDS: ${state.historyList.map(item => item.id)}`)

      /*

      if (state.historyList == undefined) {

        console.log('state.historyList was UNDEFINED')
        return state

      } else {

        console.log(`HL: ${JSON.stringify(state.historyList)}`)
        return state
      }

      if (state.historyList == []) { return [{title: action.payload, ...state.historyList]]}
      */



      var foundIndex = state.historyList.map(item => item.id).indexOf(action.payload.id)

      console.log(`foundIndex: ${foundIndex}`)

      if (foundIndex > -1) {
        return { historyList: [ action.payload, ...(state.historyList.slice(0,foundIndex).concat(state.historyList.slice(foundIndex + 1))) ]}
      } else {
        return { historyList: [action.payload, ...state.historyList] }
      }


    case ActionTypes.CLEAR_HISTORY:
      console.log(`CLEARING HISTORY`)
      return {historyList: []}

    default:
      return state;
  }
}

export const getHistory = (state: DocumentHistory) => state.historyList;
