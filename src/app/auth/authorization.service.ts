import { Constants } from '../toplevel/constants'

import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Store} from '@ngrx/store';

import {User} from '../state-management/interfaces/user.interface'
import {AppState} from '../state-management/interfaces/appstate.interface'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { authorizeUser } from '../state-management/reducers/action.types'
import { clearAll } from '../state-management/reducers/action.types'


@Injectable()
export class AuthorizationService {

  constructor (private http: Http,
               private constants : Constants,
               private store: Store<AppState>) {

  }

  signin(username: string, password: string) {

    var url = `${this.constants.apiRoot}/users/${username}?${password}`

    return this.http.get(url)
      .map((res:Response) => res.json())
      .subscribe(payload => this.store.dispatch(
        authorizeUser(
              { username: username,
                password: password,
                id: payload.user_id,
                token: payload.token,
                signedIn: payload.token != null,
                last_document_id: payload.last_document_id,
                last_document_title: payload.last_document_title,
                action: 'signin'
              })))
  }

  signup(username: string, email: string, password: string) {

    var parameter ={username: username, email: email, password: password}

    var url = `${this.constants.apiRoot}/users/create`

    return this.http.post(url, parameter)
      .map((res:Response) => res.json())
      .subscribe(payload => [
          console.log(`LOGIN RESPONSE: ${JSON.stringify(payload)}`),
          this.store.dispatch(
            authorizeUser(
              {
                username: username, password: password,
                id: payload.user_id, token: payload.token,
                signedIn: payload.token != null,
                action: 'signup'
              }
              ))
      ])

  }


  signout() {

    var nullUser: User = {
      id: -1,
      username: 'nobody',
      password: '',
      email: 'nobody@nowhere.io',
      token: '',
      signedIn: false,
      last_document_id: -1,
      last_document_title: 'Whatever',
      action: 'signout'
    }

    this.store.dispatch(authorizeUser(nullUser))

  }


}

