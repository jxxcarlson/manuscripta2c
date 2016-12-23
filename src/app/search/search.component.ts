import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DocumentService } from '../services/document.service'
import { Store } from '@ngrx/store'
import 'rxjs/add/operator/take'
import {Router} from '@angular/router';

import {AppState} from '../state-management/interfaces/appstate.interface'

@Component({
  selector: 'searchbar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.Native // .None, .Native, .Emulated
})
export class SearchComponent implements OnInit {

  @Input() target: string = 'default'

  constructor(private documentService: DocumentService,
              private store: Store<AppState>,
              private router: Router) {

    this.store = store
    this.documentService = documentService

  }

  doSearch2(searchTerm: string, username: string, searchScope: string) {

    if (username == 'nobody') { searchScope='publicdocs'}

    this.documentService.search(searchTerm, username, searchScope)
    if (this.target != 'default') {

      // this.router.navigateByUrl(['/reader'])
      //this.router.navigateByUrl('/read')
      this.router.navigateByUrl(this.target)


    }

  }

  doSearch(searchTerm: HTMLInputElement) {

    this.store
      .take(1)
      .subscribe(state => this.doSearch2(searchTerm.value, state.user.username, state.uistate.searchScope ))
  }

  ngOnInit() {

    console.log(`Search component target = ${this.target}`)


  }

}
