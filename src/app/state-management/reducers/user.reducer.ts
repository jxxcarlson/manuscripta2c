// https://github.com/ngrx/store
//

import {ActionTypes} from './action.types'
import { User, initialUser } from '../interfaces/user.interface'
import { ActionReducer, Action } from '@ngrx/store';

export const AUTHORIZE_USER =  'AUTHORIZE_USER'

export const userReducer: ActionReducer<User> =
  (state: User = initialUser, action: Action) => {
    switch (action.type) {
      case ActionTypes.AUTHORIZE_USER:
        return action.payload
      default:
        return state;
    }
  };


export const getUser = (state) => state.user;
