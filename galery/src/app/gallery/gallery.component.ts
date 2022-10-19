import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imagesList:Image[] = [];
  constructor() { }

  ngOnInit(): void {}

  onNewImageAddedSubs(item:Image){
    this.imagesList.push(item);
  }
}
