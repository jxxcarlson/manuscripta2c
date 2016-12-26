
// https://github.com/bbottema/ng2-simple-page-scroll/issues
//

import {ActionTypes} from './action.types'

import {Image} from '../interfaces/image.interface'
import {initialImage} from '../interfaces/image.interface'
import {ActionReducer, Action} from '@ngrx/store';

export const activeImageReducer: ActionReducer<Image> = (state: Image = initialImage, action: Action) => {
  console.log(`activeImageReducer, payload = ${action.payload}`)
  switch (action.type) {
    case ActionTypes.SELECT_IMAGE:
      console.log(`SELECT_IMAGE, payload = ${JSON.stringify(action.payload)}`)
      return action.payload;
    case ActionTypes.UPDATE_IMAGE:
      return Object.assign (state, action.payload)
    default:
      return state;
  }

};

