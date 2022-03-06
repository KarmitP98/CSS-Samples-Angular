import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDragExit} from '@angular/cdk/drag-drop';

class CdkDragEnter<T> {
}

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss']
})
export class DragDropListComponent implements OnInit {

  items: string[] = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  basket: string[] = ['Oranges', 'Bananas', 'Cucumbers'];

  constructor() { }

  ngOnInit(): void {
  }

  public entered(event: CdkDragEnter<string[]>): void {
    console.log(event);
  }

  public exited(event: CdkDragExit<string[]>): void {
    console.log(event);
  }

  public drop(event: CdkDragDrop<any>): void {
    console.log(event);
    this.transferElement(event.previousIndex, this.getVariable(event.previousContainer.id), this.getVariable(event.container.id));
  }

  transferElement = (oldIndex: number, oldList: string[], newList: string[]) => {
    const item = oldList[oldIndex];
    oldList.splice(oldIndex, 1);
    newList.unshift(item);
  };

  getVariable = (name: string) => {
    switch (name) {
      case 'basket':
        return this.basket;
      default:
        return this.items;
    }
  };
}
