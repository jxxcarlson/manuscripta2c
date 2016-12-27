// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { Image, initialImage } from '../interfaces/image.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const imagesReducer: ActionReducer<Image[]> =
  (state: Image[] = [initialImage], action: Action) => {
    switch (action.type) {
      case ActionTypes.SET_IMAGES:
        return action.payload
      default:
        return state;
    }
  };
