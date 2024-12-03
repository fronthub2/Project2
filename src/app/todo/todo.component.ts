import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IData } from '../interface/todoitem.interface';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() valueData!: IData[];
  @Output() onDeleteEvent = new EventEmitter<number>();
  @Output() onEditEvent = new EventEmitter<number>();

  onDelete(index: number) {
    this.onDeleteEvent.emit(index);
  }

  onEdit(inx:number) {
    this.onEditEvent.emit(inx);
  }
}
