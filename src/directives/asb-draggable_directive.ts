import {
  Directive, Input, ElementRef,
  OnChanges, SimpleChange, Attribute,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[asbDraggable]'
})
export class AsbDraggableDirective implements OnChanges {
  @Input('asbDraggable') isDraggable: boolean;
  @Input('asbDraggableData') data: any;

  private nativeElement: any;

  @HostListener('dragstart', ['$event'])
  onDragStart (event) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData(this.draggableType, this.draggableType);
    event.dataTransfer.setData('data', JSON.stringify(this.data));
  }

  constructor (private element: ElementRef, @Attribute('asbDraggableType') private draggableType) {
    this.nativeElement = element.nativeElement;
  }

  ngOnChanges (changes: { [propName: string]: SimpleChange }) {
    let change: SimpleChange = changes['isDraggable'];

    if (change && change.currentValue) {
      this.nativeElement.setAttribute('draggable', 'true');
    } else {
      this.nativeElement.setAttribute('draggable', 'false');
    }
  }
}
