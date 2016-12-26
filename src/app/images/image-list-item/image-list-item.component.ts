import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Image } from '../../state-management/interfaces/image.interface'

@Component({
  selector: 'image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ImageListItemComponent implements OnInit {

  @Input() image: Image
  // @Input() active: boolean


  // document_title = this.truncateString(document.title, 30)
  // document_title = document.title



  constructor() {

  }

  ngOnInit() {
  }
}
