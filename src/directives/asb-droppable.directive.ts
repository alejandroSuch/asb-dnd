import {
  Directive, ElementRef, HostBinding,
  Attribute, HostListener, Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[asbDroppable]'
})
export class AsbDroppableDirective {
  @Output()
  onDrop: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.dragover')
  isDragOver = false;

  @HostBinding('class.forbidden')
  isForbidden = false;

  @HostListener('dragover', ['$event'])
  dragHandler (event) {
    let canDrop = this.droppableItems
                      .map(droppableItem => [...event.dataTransfer.types].some(type => droppableItem.toLowerCase() === type.toLowerCase()))
                      .reduce((prev, curr) => prev || curr, false);

    this.isDragOver = true;

    if (canDrop) {
      event.preventDefault();
    } else {
      this.isForbidden = true;
    }
  }

  @HostListener('drop', ['$event'])
  dropHandler (event) {
    event.preventDefault();

    this.isDragOver = false;
    this.isForbidden = false;

    this.onDrop.emit(JSON.parse(event.dataTransfer.getData('data')))

  }

  @HostListener('dragleave')
  dragLeaveHandler () {
    this.isDragOver = false;
    this.isForbidden = false;
  }

  droppableItems: string[];

  constructor (private element: ElementRef, @Attribute('asbDroppable') asbDroppable: string) {
    this.droppableItems = asbDroppable.split(',');
  }

}
