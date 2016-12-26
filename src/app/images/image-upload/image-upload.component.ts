import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor( private router: Router) {

    this.router = router
  }

  ngOnInit() {
  }

  upload() {

    console.log(`UPLOAD file: ${file}`)

  }

  cancel() {

    this.router.navigateByUrl('/images')
  }

}
