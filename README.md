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

|Attribute   	                  | Type   	          | Default  	    | Description
|---	                          |---	              |---	          |---	        
| `asbDraggable`  	            | `@Input()`   	    | false  	      |  Converts the component into an HTML _draggable_  	        
| `asbDraggableData`  	        | `@Input()`  	    | `null`        |  This will be the payload associated to the drag event.   
| `asbDraggableType`  	        | `@Attribute()`    | `draggable`   |  Type of the draggable



### asbDroppable
`asbDroppable` enables dropping of _draggables_ on a given component. This directive accetps a comma-separated list of `asbDraggableType`s.

If the draggable type is accepted by this droppable, class `dragover` is added to the component. In other case, then classes will be `dragover` and `forbidden` added.

#### Attributes

|Attribute   	                  | Type   	          | Default  	    | Description
|---	                          |---	              |---	          |---	        
| `onDrop`  	                  | `@Output()`  	    |       	      |  Event to emit when a drop has occured
| `asbDroppable`      	        | `@Attribute()`    | `draggable`   |  Comma-separated list of `asbDraggableType`s