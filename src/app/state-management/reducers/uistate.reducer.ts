// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { UIState, initialUIState } from '../interfaces/uistate.interface'
import { ActionReducer, Action } from '@ngrx/store';


export const uistateReducer: ActionReducer<UIState> =
  (state: UIState = initialUIState, action: Action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_NAV_STATE:
        return Object.assign(state, {activeNavSection: action.payload.activeNavSection})
      case ActionTypes.UPDATE_SEARCH_SCOPE:
        return Object.assign(state, {searchScope: action.payload.searchScope})
      default:
        return initialUIState;
    }
  };
