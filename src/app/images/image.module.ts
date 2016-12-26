import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TextHelpersModule} from '../text_helpers/text_helpers.module'
import {ImageService} from '../services/image_service'
import {ImageListItemComponent} from './image-list-item/image-list-item.component'
import {ImageSearchComponent} from './search/search.component'
import {ImagesComponent} from './images/images.component'
import {ImageUploadComponent} from './image-upload/image-upload.component'

@NgModule ({

  declarations: [

    ImageListItemComponent,
    ImageSearchComponent,
    ImagesComponent,
    ImageUploadComponent

  ],

  imports: [

    BrowserModule,
    TextHelpersModule,

  ],

  providers: [

    ImageService

  ],

  exports: [

  ]


})
export class ImageModule {}
