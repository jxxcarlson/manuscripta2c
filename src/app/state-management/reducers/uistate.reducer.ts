// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { UIState } from '../interfaces/uistate.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const initialState: UIState = {
  activeNavSection: 'home',
  searchScope: 'mydocs'
}

export const uistateReducer: ActionReducer<UIState> =
  (state: UIState = initialState, action: Action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_NAV_STATE:
        return action.payload
      default:
        return initialState;
    }
  };
