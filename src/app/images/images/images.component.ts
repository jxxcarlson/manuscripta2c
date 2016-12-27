import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {NavbarService} from '../../toplevel/navbar/navbar.service'
import {Image} from '../../state-management/interfaces/image.interface'
import {AppState} from '../../state-management/interfaces/appstate.interface'
import {ImageService} from '../../services/image_service'
import { Observable } from 'rxjs/Rx';
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  image$: Observable<Image>
  images$: Observable<Image[]>
  tocInset:string = "300"  // used to set height of table of contents (TOC)

  constructor(private navbarService: NavbarService,
            private imageService: ImageService,
            private imageStore: Store<any>,
            private imagesStore: Store<any>,
            private router: Router) {

    this.navbarService = navbarService
    this.imageService = imageService
    this.imageStore = imageStore
    this.imagesStore = imagesStore

  }

  ngOnInit() {

    this.navbarService.updateUIState('media')
    // this.imageService.getImage(58)
    // this.imageService.search('random=10', '', 'null')
    this.image$ = this.imageStore.select(s => s.activeImage)
    this.images$ = this.imagesStore.select(s => s.images)


  }

  randomImages() {

    this.imageService.search('random=10', '', 'null')

  }

  isActive(image, activeImage): boolean {

    if ( image.id == activeImage.id) {

      return true

    } else {

      return false
    }

  }

  openImageUploader() {

    this.router.navigateByUrl('/upload_image')


  }


}
