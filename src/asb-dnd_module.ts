import { NgModule } from '@angular/core';
import { AsbDraggableDirective } from './directives/asb-draggable_directive';
import { AsbDroppableDirective } from './directives/asb-droppable_directive';

@NgModule({
  imports     : [],
  declarations: [
    AsbDraggableDirective,
    AsbDroppableDirective
  ],
  providers   : [],
  exports     : [
    AsbDraggableDirective,
    AsbDroppableDirective
  ],
})
export class AsbDragAndDropModule {
}
