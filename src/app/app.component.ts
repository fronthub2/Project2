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

  constructor() {
    console.log('note', this.getLS());
    this.data = this.getLS();
    this.setLS(this.data);
    this.btnTitle = 'Add';
  }
  // Правильно ли что вынес в отдельный файл?
  // getLS() {
  //   const noteJSON = localStorage.getItem('note');
  //   return noteJSON ? JSON.parse(noteJSON) : [];
  // }

  // setLS(note: IData[]) {
  //   localStorage.setItem('note', JSON.stringify(note));
  // }

  onAddClick(event: HTMLInputElement) {
    if (this.btnTitle === 'Edit') {
      if (!this.data[this.index]) {
        this.data.push({
          id: this.data.length + 1,
          title: this.title,
        });
      }

      this.data[this.index].title = this.title;
      this.title = '';
    } else {
      this.data.push({ /* это нужно вынести отдельно? типо no repeat code? */
        id: this.data.length + 1,
        title: this.title,
      });
      this.title =
        ''; /*это костыль, потому что при повторном изменении в input.value ничего не отображается */
    }

    event.value = '';
    this.isDisable = true;
    this.setLS(this.data);
    this.btnTitle = 'Add';
  }

  onDelete(index: number) {
    this.data.splice(index, 1);
    this.setLS(this.data);
  }

  onEdit(inx: number) {
    this.index = inx;
    this.isDisable = false;
    this.btnTitle = 'Edit';
    this.title = this.data[inx].title;
  }

  onChangeInput(event: HTMLInputElement) {
    if (!event.value.trim().length) return (this.isDisable = true);

    return (this.isDisable = false);
  }
}
