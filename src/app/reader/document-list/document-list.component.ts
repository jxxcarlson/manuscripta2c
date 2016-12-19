import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Document } from '../../shared/document.model'
import { Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store'
import { setDocuments } from '../../state-management/reducers/action.types'
import { DocumentService } from '../../services/document.service'


interface AppState {
  documents: Document[]
  activeDocument: Document
}


@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class DocumentListComponent implements OnInit {

  documents$: Observable<Document[]>
  activeDocument$: Observable<Document>

  tocInset:string = "300"  // used to set height of table of contents (TOC)
  documentListTitle:string = 'Documents'  // is used as title of TOC

  constructor( private store: Store<AppState>, private documentService: DocumentService) {

    this.documentService = documentService

  }

  ngOnInit() {

    this.documents$ = this.store.select(s => s.documents).do(val => console.log(`${val.length} documents loaded`))

    this.activeDocument$ = this.store.select(s => s.activeDocument)

  }

  selectDocument(document) {

    this.documentService.select(document)

    if (document.has_subdocuments) {

      this.store.dispatch(setDocuments(document.links.documents))

    }

  }

  isActive(document, activeDocument): boolean {

    if ( document.id == activeDocument.id) {

      return true

    } else {

      return false
    }

  }


  subdocumentSymbol(document:Document): string {

      return document.has_subdocuments ? '•' : ''

  }



}
