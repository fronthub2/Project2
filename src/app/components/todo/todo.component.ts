import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IData } from '../../interface/todoitem.interface';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  @Input() valueData!: IData[];
  @Output() onDeleteEvent = new EventEmitter<number>();
  @Input() isDisableDelete!: boolean;
  @Output() onEditEvent = new EventEmitter<number>();
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onDelete(index: number) {
    this.onDeleteEvent.emit(index);
  }

  onEdit(index: number) {
    this.onEditEvent.emit(index);
  }
}
