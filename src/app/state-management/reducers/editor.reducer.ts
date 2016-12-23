// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { Editor, initialEditState } from '../interfaces/editor.interface'
import { ActionReducer, Action } from '@ngrx/store';



export const editorReducer: ActionReducer<Editor> =
  (state: Editor = initialEditState, action: Action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_EDIT_TEXT:
        return action.payload
      case ActionTypes.SET_EDIT_TEXT:
        return action.payload
      default:
        return initialEditState;
    }
  };
