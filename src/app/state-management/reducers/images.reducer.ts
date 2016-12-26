// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { Image } from '../interfaces/image.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const imagesReducer: ActionReducer<Image[]> =
  (state: Image[] = [], action: Action) => {
    switch (action.type) {
      case ActionTypes.SET_IMAGES:
        return action.payload
      default:
        return state;
    }
  };
