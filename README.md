# Drag and drop directives for Angular

This Angular module consists of two Angular directives that allow yo to drag elements and drop them into any droppable element.

Draggables can hold any JSON-serializablea payload that will be delivered to the droppable.

## Installation

Drag and Drop library can be installed via npm

```
npm install asb-dnd --save
```

## Sample code

Please see to [this plunker](https://embed.plnkr.co/jQaSqD0MGfguvVYNMkaz/) for a full working example.

## Usage

To use these directives you have to import `AsbDragAndDropModule` in your app module.

```
import { NgModule } from '@angular/core';
/* ... */
import { AsbDragAndDropModule } from 'asb-dnd';

@NgModule({
  imports     : [AsbDragAndDropModule /*, ... */],
  /* ... */
})
export class MyApplicationModule {
}

```

## Directives

### asbDraggable
`asbDraggable` enables HTML dragging on a given component.

#### Attributes




### asbDroppable






















m       fuy¡