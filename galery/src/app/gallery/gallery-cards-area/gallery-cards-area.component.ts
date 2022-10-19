import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-gallery-cards-area',
  templateUrl: './gallery-cards-area.component.html',
  styleUrls: ['./gallery-cards-area.component.css']
})
export class GalleryCardsAreaComponent implements OnInit {
  @Input()
  images!:Image[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
