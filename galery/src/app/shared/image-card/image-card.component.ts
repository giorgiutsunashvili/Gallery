import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/gallery/image.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input()
  images!:Image[];
  constructor() { }

  ngOnInit(): void {
  }

}
