import { Component, OnInit } from '@angular/core';
import { Document } from '../../shared/document.model'
import { DocumentService } from '../../services/document.service'

import {PageScrollInstance, PageScrollService, EasingLogic} from 'ng2-page-scroll';

import { Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store'
interface AppState {
  documents: Document[],
  activeDocument: Document
}


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  defaultDocument: Document = new Document ({

    id: '23',

    title: 'TEST',

    text: `This is a test!`,

    rendered_text: ` This is a test">`
  })

  activeDocument: Document
  parentId: string = '-1'
  parentTitle: string = '-'
  subdocuments: Document[] = []
  documents: Observable<Document[]>

  constructor(private store: Store<AppState>,
              private documentService: DocumentService,
              private pageScrollService: PageScrollService) {

    store.select(s => s.activeDocument)
      .subscribe( activeDocument => this.activeDocument = activeDocument || this.defaultDocument)

    // let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.activeDocument.rendered_text);
    // this.pageScrollService.start(pageScrollInstance);

  }

  loadParent() {

    if (this.parentId != '-1') {

      this.documentService.getDocumentAndSubdocuments(parseInt(this.parentId))

    }
  }

  getParentTitle(): string {

    if (this.activeDocument.links != undefined && this.activeDocument.links.parent != undefined && this.activeDocument.links.parent.id != undefined) {

      this.parentId = this.activeDocument.links.parent.id
      this.parentTitle = this.activeDocument.links.parent.title

    } else {

      this.parentId = '-1'
      this.parentTitle = '|•|'

    }

    return this.parentTitle
  }

  ngOnInit() {

    // this.navbarService.updateUIState('read')
  }


}
