import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-zide-editor',
  templateUrl: './font-zide-editor.component.html',
  styleUrls: ['./font-zide-editor.component.css']
})
export class FontZideEditorComponent  {
  fontSize:any = 14;
  changeFontSize(){
    this.fontSize++
  }

}
