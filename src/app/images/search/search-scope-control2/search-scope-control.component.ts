 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 import { Store } from '@ngrx/store'
 import 'rxjs/add/operator/take'
 import {UIState} from "../../state-management/interfaces/uistate.interface";
 import {User} from "../../state-management/interfaces/user.interface";
 import {AppState} from "../../state-management/interfaces/appstate.interface";


 import {updateSearchScope} from "../../state-management/reducers/action.types";
 import {Observable} from "rxjs";

@Component({
  selector: 'app-search-scope-control',
  templateUrl: 'search-scope-control.component.html',
  styleUrls: ['search-scope-control.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SearchScopeControlComponent implements OnInit {

  selectedOption:Options = new Options(1, 'My docs');

  searchScope$: Observable<string>
  user$: Observable<User>

  map = { 1: 'mydocs', 2: 'publicdocs', 3: 'alldocs' }
  inverseMap = { 'mydocs':0, 'publicdocs':1, 'alldocs':2 }

  options = [
    new Options(1, 'My docs' ),
    new Options(2, 'Public' ),
    new Options(3, 'All' ),
  ];

  constructor (private uistore: Store<UIState>,
              private store: Store<AppState>) {

    this.uistore = uistore
    this.store = store

  }

  getValue(optionid) {
    this.selectedOption = this.options.filter((item)=> item.id == optionid)[0]
    console.log(`SEARCH OPTION: ${JSON.stringify(this.selectedOption)} => ${this.map[this.selectedOption.id]}`)
    this.uistore.dispatch(updateSearchScope( {searchScope: this.map[this.selectedOption.id]} ))
  }

  getIndex(state) {

    return this.inverseMap[state.uistate.searchScope]
  }

  ngOnInit() {

    this.searchScope$ = this.uistore.select(s => s.searchScope)

    this.user$ = this.store.select(state => state.user)


    this.uistore
      .take(1)
      .subscribe(state => this.selectedOption = this.options[this.getIndex(state)]);

  }

}

export class Options {
  constructor(public id: number, public name: string) { }
}


// https://plnkr.co/edit/peK6zJngB9X76nOzDzYo?p=preview
