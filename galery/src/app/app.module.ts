import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCardsAreaComponent } from './gallery/gallery-cards-area/gallery-cards-area.component';
import { ImageCardComponent } from './shared/image-card/image-card.component';
import { GalleryImageFillerComponent } from './gallery/gallery-image-filler/gallery-image-filler.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryCardsAreaComponent,
    ImageCardComponent,
    GalleryImageFillerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
