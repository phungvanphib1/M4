import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPipe } from './custom.pipe';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    "CustomPipe"
  ]
})
export class AppRoutingModule { }
