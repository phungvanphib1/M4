import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontZideEditorComponent } from './font-zide-editor/font-zide-editor.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { CPropertyComponent } from './c-property/c-property.component';
import { DEventComponent } from './d-event/d-event.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { CustomPipe } from './custom.pipe';
import { FPipesComponent } from './f-pipes/f-pipes.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { InputChildComponent } from './input-child/input-child.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [	
    AppComponent,
      FontZideEditorComponent,
      PetComponent,
      ProductComponent,
      BPropertyComponent,
      CPropertyComponent,
      DEventComponent,
      ProductListComponent,
      ProductDetailComponent,
      ArticleComponent,
      LikeComponent,
      CustomPipe,
      FPipesComponent,
      InputPropertyComponent,
      InputChildComponent,
      OutputChildComponent,
      OutputPropertyComponent,
      NgIfComponent,
      GameComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
