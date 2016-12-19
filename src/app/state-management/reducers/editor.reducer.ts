// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { Editor } from '../interfaces/editor.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const initialState: Editor = {
  text: '',
}

export const editorReducer: ActionReducer<Editor> =
  (state: Editor = initialState, action: Action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_EDIT_TEXT:
        return action.payload
      case ActionTypes.SET_EDIT_TEXT:
        return action.payload
      default:
        return initialState;
    }
  };
