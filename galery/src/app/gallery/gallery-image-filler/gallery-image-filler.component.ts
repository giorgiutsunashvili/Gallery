import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-gallery-image-filler',
  templateUrl: './gallery-image-filler.component.html',
  styleUrls: ['./gallery-image-filler.component.css']
})
export class GalleryImageFillerComponent implements OnInit {
  image: Image = new Image();

  @Output()
  onNewImageAddedEmitter:EventEmitter<Image> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  imageInpChange(event: Event): void {
    let self = this;
    var inp: HTMLInputElement = event.target as HTMLInputElement;
    var fileReader = new FileReader();
    fileReader.onload = function () {
      self.image.baseLink =  fileReader.result?.toString() ?? '';
      inp.value = "";
    }
    if (inp.files != null) {
      fileReader.readAsDataURL(inp.files[0])
    }
  }

  onImageSaveb() {
    this.image.date = new Date();
    this.onNewImageAddedEmitter.emit(this.image);
    this.image = new Image();
  }

}
