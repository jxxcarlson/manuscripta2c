

import {Component, OnInit} from '@angular/core';
import {AppState} from '../../state-management/interfaces/appstate.interface';
import {Document} from '../../state-management/interfaces/document.interface'
import {DocumentService} from '../../services/document.service'
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
  selector: 'new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})
export class NewDocumentComponent implements OnInit {

  activeDocument$: Observable<Document>

  model = {
            title: '',
            child: false,
            above: false,
            below: false
          }

  constructor(
              private store: Store<AppState>,
              private documentService: DocumentService,
              private router: Router

  ) {

    this.store = store
    this.documentService = documentService
    this.activeDocument$ = this.store.select(s => s.activeDocument)

  }


  gotoRoute() {

    setTimeout(() => {
      [this.router.navigateByUrl('/edit'),
        console.log('GO TO ROUTE')]
    }, 700)
  }


  parentId(document: Document) {

    if (document.links == undefined) {
      return 0
    }

    if (document.links.parent == undefined) {
      return 0
    }

    return document.links.parent.id
  }

  submit() {

    var position: string

    this.model.above == true ? position = 'above' : position = 'below'

    console.log(`MODEL: ${JSON.stringify(this.model)}`)

    let params = {
      title: this.model.title,
      options: {"child": this.model.child, "position": position},
      current_document_id: 0,
      parent_document_id: 0
    }

    // Example: options = {"child"=>false, "position"=>"null"}
    // options = {"child"=>true|false, "position"=>null|above|below}
    // position = null if child = false // actually, position is ignored in this case

    this.activeDocument$.take(1).subscribe(activeDocument => [
      params = Object.assign(params, {
        current_document_id: activeDocument.id,
        parent_document_id: this.parentId(activeDocument)
      }),
      console.log(`CREATION PARAMS: ${JSON.stringify(params)}`),
      this.documentService.createDocument(params),
      this.gotoRoute()
    ])


  }


  ngOnInit() {

  }


}
