import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Data } from './interface/todoitem.interface';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent, CommonModule, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title!: string;
  isDisable: boolean = true;
  data = Data;

  onAddClick(event: HTMLInputElement) {
    this.data.push({
      id: this.data.length + 1,
      title: this.title,
    });

    event.value = '';
    this.isDisable = true;
  }

  onDelete(id: number) {
    this.data = this.data.filter((el) => el.id != id);
  }

  onChangeInput(event: HTMLInputElement) {
    if (!event.value.trim().length) return (this.isDisable = true);

    return (this.isDisable = false);
  }
}
