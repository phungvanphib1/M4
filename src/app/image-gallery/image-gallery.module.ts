import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageGalleryComponent} from './image-gallery.component';
import {ImageCardComponent} from './image-card/image-card.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path:  'image-card', component: ImageGalleryComponent  },
  ]
  export const ImageRoutes = RouterModule.forChild(routes);
@NgModule({
  declarations: [
    ImageGalleryComponent,
     ImageCardComponent
    ],
  exports: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageGalleryModule {
}
