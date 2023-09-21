import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component {
  @Input() title?: string;

 @Output() titleChange =  new EventEmitter<string>();

  emitTitleChange(){
    this.titleChange.emit(this.title);
  }
}
