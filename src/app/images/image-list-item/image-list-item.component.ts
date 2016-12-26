import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core'
import {Image} from '../../state-management/interfaces/image.interface'
import {ImageService} from '../../services/image_service'

@Component({
  selector: 'image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ImageListItemComponent implements OnInit {

  @Input() image: Image
  @Input() active: boolean

  constructor( private imageService: ImageService ) {

    this.imageService = imageService

  }

  gotoImage(id) {

    this.imageService.getImage(id)

  }

  activeColor(active: boolean) {

    if (active) {

      return 'red'

    } else {

      return 'cornflower_blue'

    }
  }

  ngOnInit() {
  }
}
