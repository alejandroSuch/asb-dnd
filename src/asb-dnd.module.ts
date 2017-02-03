import { NgModule } from '@angular/core';
import { AsbDraggableDirective } from './directives/asb-draggable.directive';
import { AsbDroppableDirective } from './directives/asb-droppable.directive';

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
