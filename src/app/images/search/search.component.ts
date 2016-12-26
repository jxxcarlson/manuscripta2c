import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ImageService } from '../../services/image_service'
import { Store } from '@ngrx/store'
import 'rxjs/add/operator/take'
import {Router} from '@angular/router';

import {AppState} from '../../state-management/interfaces/appstate.interface'

@Component({
  selector: 'image-searchbar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.Native // .None, .Native, .Emulated
})
export class ImageSearchComponent implements OnInit {

  @Input() target: string = 'default'

  constructor(private imageService: ImageService,
              private store: Store<AppState>,
              private router: Router) {

    this.store = store
    this.imageService = imageService

  }

  doSearch2(searchTerm: string, username: string, searchScope: string) {

    if (username == 'nobody') { searchScope='publicdocs'}

    this.imageService.search(searchTerm, username, searchScope)

  }

  doSearch(searchTerm: HTMLInputElement) {

    this.store
      .take(1)
      .subscribe(state => this.doSearch2(searchTerm.value, state.user.username, 'null' ))
  }

  ngOnInit() {

    console.log(`Search component target = ${this.target}`)


  }

}
