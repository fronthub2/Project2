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
  @Output() valueDataChange = new EventEmitter<IData[]>();

  onDelete(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const parent = target.parentElement as HTMLElement;
    const id = Number(parent.id);
    this.valueData = this.valueData.filter((data) => data.id !== id);
    this.valueData.forEach((data, index: number) => (data.id = index + 1));
    this.valueDataChange.emit(this.valueData);
  }
}
