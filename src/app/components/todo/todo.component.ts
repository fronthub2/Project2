import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IData } from '../../interface/todoitem.interface';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, MatTooltipModule],
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  @Input() valueData!: IData[];
  @Input() isDisableDelete!: boolean;
  @Output() DeleteEvent = new EventEmitter<number>();
  @Output() EditEvent = new EventEmitter<number>();
  @Input() isDisableDescription!: boolean;
  @Output() DescriptionEvent = new EventEmitter<number>();

  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }


  onDelete(index: number) {
    this.DeleteEvent.emit(index);
  }

  onEdit(index: number) {
    this.EditEvent.emit(index);
  }

  onDescription(i: number) {
    this.DescriptionEvent.emit(i);
  }

  onSelected(event:MouseEvent) {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => item.classList.remove('selected'));
    const target = event.target as HTMLElement;
    const item = target.closest('.item') as HTMLElement;
    item.classList.add('selected');
  }
}
