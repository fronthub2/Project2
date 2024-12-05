import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IData } from '../interface/todoitem.interface';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  ngOnInit(): void {
    console.log('до', this.isLoading);
    const timeout = setTimeout(() => {
      this.isLoading = false;
      console.log('до', this.isLoading);
    }, 2000);
  }

  @Input() valueData!: IData[];
  @Output() onDeleteEvent = new EventEmitter<number>();
  @Input() isDisableDelete!: boolean;
  @Output() onEditEvent = new EventEmitter<number>();
  isLoading: boolean = true;

  onDelete(index: number) {
    this.onDeleteEvent.emit(index);
  }

  onEdit(index: number) {
    this.onEditEvent.emit(index);
  }
}
