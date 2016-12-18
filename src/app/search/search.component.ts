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

  doSearch(searchTerm: HTMLInputElement) {

    this.documentService.search(searchTerm.value)
    if (this.target != 'default') {

      // this.router.navigateByUrl(['/reader'])
      //this.router.navigateByUrl('/read')
      this.router.navigateByUrl(this.target)


    }

  }

  ngOnInit() {

    console.log(`Search component target = ${this.target}`)


  }

}
