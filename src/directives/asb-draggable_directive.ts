import {Attribute, Directive, ElementRef, HostListener, Input, OnChanges, Renderer, SimpleChange} from "@angular/core";

@Directive({
  selector: '[asbDraggable]'
})
export class AsbDraggableDirective implements OnChanges {
  @Input('asbDraggable') isDraggable: boolean;
  @Input('asbDraggableData') data: any;

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData(this.draggableType, this.draggableType);
    event.dataTransfer.setData('data', JSON.stringify(this.data));
  }

  constructor(private element: ElementRef,
              @Attribute('asbDraggableType') private draggableType,
              private renderer: Renderer) {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    let change: SimpleChange = changes['isDraggable'];

    if (change && change.currentValue) {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'setAttribute', ['draggable', 'true']);
    } else {
      this.renderer.invokeElementMethod(this.element.nativeElement, 'setAttribute', ['draggable', 'false']);
    }
  }
}
