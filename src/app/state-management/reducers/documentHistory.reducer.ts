// https://github.com/reactjs/reselect

import {ActionTypes} from './action.types'
import { ActionReducer, Action } from '@ngrx/store';
import { DocumentHistory, initialHistoryState, initialHistoryItem } from '../interfaces/history.interface'

export const documentHistoryReducer: ActionReducer<DocumentHistory> =
  (state: DocumentHistory = initialHistoryState, action: Action) => {
  switch (action.type) {
    case ActionTypes.PUSH_DOCUMENT_ON_HISTORY:

      console.log(`PAYLOAD, source = ${action.payload.foo} :: ${JSON.stringify(action.payload)}`)
      console.log(`IDS: ${state.historyList.map(item => item.id)}`)

      var foundIndex = state.historyList.map(item => item.id).indexOf(action.payload.id)

      console.log(`foundIndex: ${foundIndex}`)

      // Trim history list if necessary
      let N = state.historyList.length

      if (N > 3) {

        var newHistoryList = state.historyList.slice(0, 3)

      } else {

        var newHistoryList = state.historyList
      }



      if (foundIndex > -1) { // advance found item to top

        return { historyList: [action.payload, ...newHistoryList.slice(0,foundIndex).concat(newHistoryList.slice(foundIndex + 1))] }

      } else { // prepend new item

        return { historyList: [action.payload, ...newHistoryList] }

      }


      // Payload: user
    case ActionTypes.CLEAR_HISTORY:

      if (action.payload == undefined) {

        console.log('in CLEAR_HISTORY, action.payload was undefined')

      } else {

        console.log(`CLEARING HISTORY, payload = ${JSON.stringify(action.payload)}`)

      }

      if (action.payload== undefined) {

        return state

      } else if (action.payload.action == 'signout') { // signing out
      // if (action.payload.id == -1) { // signing out

          console.log('Clear history ON SIGNOUT')

          // return {historyList: [initialHistoryItem]}
          return {historyList: [initialHistoryItem]}

      } else if (action.payload.action == 'signin'){ // signing in or up

        console.log('Clear history ON SIGNIN')

          return {historyList: [{title: action.payload.last_document_title, id: action.payload.last_document_id}]}

      } else {

        return state
      }

    default:
      return state;
  }
}

export const getHistory = (state: DocumentHistory) => state.historyList;
