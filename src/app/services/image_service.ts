import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Image} from '../state-management/interfaces/image.interface';
import {User} from '../state-management/interfaces/user.interface';
import {AppState} from '../state-management/interfaces/appstate.interface';
import {Constants} from '../toplevel/constants'

import { QueryParser } from './queryparser.service'

import {selectImage, setImages} from '../state-management/reducers/action.types'

@Injectable()
export class ImageService {

  user$: Observable<User>;

  constructor(private http: Http,
              private imageStore: Store<Image>,
              private store: Store<AppState>,
              private constants: Constants) {

    this.user$ = store.select(s => s.user);

  }

  apiRoot = this.constants.apiRoot

  standardOptions(token: string): RequestOptions {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'accesstoken': token
    });

    return new RequestOptions({ headers: headers });
  }

  getImage(id: number) {

    let url = `${this.apiRoot}/images/${id}`

    this.store.select(state=> state.user.token)
      .flatMap( token => this.http.get(url, this.standardOptions(token))
        .map((res) => res.json())
        .do(payload =>[
          console.log(`IMAGE: ${JSON.stringify(payload['image'])}`),
          this.store.dispatch(selectImage(payload['image'])),
        ])
      ).subscribe()

  }


  search (searchTerm: string, username: string, searchScope:string): void {

    var qp: QueryParser = new QueryParser();
    var apiQuery: string = qp.parse(searchTerm, username, searchScope)
    var url: string = `${this.apiRoot}/images?${apiQuery}`

    this.store.select(state=> state.user.token)
      .flatMap( token => this.http.get(url, this.standardOptions(token))
        .map((res) => res.json())
        .do(payload => [
          this.store.dispatch(setImages(payload['images'])),
          // this.select(payload['images'][0])
        ])
      ).subscribe()
  }


}
