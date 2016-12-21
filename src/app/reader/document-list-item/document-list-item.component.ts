import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Document } from '../../shared/document.model'

@Component({
  selector: 'document-list-item',
  templateUrl: './document-list-item.component.html',
  styleUrls: ['./document-list-item.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class DocumentListItemComponent implements OnInit {

  @Input() document: Document
  @Input() active: boolean
  @Input() subdocumentSymbol: string


  // document_title = this.truncateString(document.title, 30)
  // document_title = document.title


  truncateString ( str: string, n: number, useWordBoundary: boolean = true ){
    var isTooLong = str.length > n,
      s_ = isTooLong ? str.substr(0,n-1) : str;
      s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
    return  isTooLong ? s_ + ' ...' : s_;
  };

  truncateString2 ( str: string, n: number, useWordBoundary: boolean = true ){
    return  str
  };

  constructor() {

  }

  ngOnInit() {
  }
}
