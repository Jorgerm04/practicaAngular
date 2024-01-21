import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})
export class ImageSelectorComponent {
  @Input() type: string = '';

  @Output() typeSelected: EventEmitter<string> = new EventEmitter<string>();

  selectType(type:string): void {
    this.type = type;
    this.typeSelected.emit(this.type);
  }


}
