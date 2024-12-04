import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Data } from './interface/todoitem.interface';
import { getLocalStorage, setLocalStorage } from './localstorage/localstorage';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent, CommonModule, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  btnTitle!: string;
  getLS = getLocalStorage;
  setLS = setLocalStorage;
  title!: string;
  isDisable: boolean = true;
  data = Data;
  index!: number;
  isDisableDelete: boolean = false;

  constructor() {
    console.log('note', this.getLS());
    this.data = this.getLS();
    this.setLS(this.data);
    this.btnTitle = 'Add';
  }

  onAddClick(event: HTMLInputElement) {
    if (this.btnTitle === 'Edit') {
      this.data[this.index].title = this.title;
      this.isDisableDelete = false;
    } else {
      this.data.push({
        id: this.data.length + 1,
        title: this.title,
      });
    }

    this.btnTitle = 'Add';
    this.isDisable = true;
    this.setLS(this.data);
    this.title = '';
    event.value = '';
  }

  onDelete(index: number) {
    this.data.splice(index, 1);
    this.setLS(this.data);
  }

  onEdit(index: number) {
    this.index = index;
    this.btnTitle = 'Edit';
    this.isDisable = false;
    this.isDisableDelete = true;
    this.title = this.data[index].title;
  }

  onChangeInput(event: HTMLInputElement) {
    if (!event.value.trim().length) return (this.isDisable = true);

    return (this.isDisable = false);
  }
}
