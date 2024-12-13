import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { DescriptionComponent } from './components/description/description.component';
import { TodoComponent } from './components/todo/todo.component';
import { Data, IData } from './interface/todoitem.interface';
import { getLocalStorage, setLocalStorage } from './localstorage/localstorage';
import { ModalComponent } from './share/modal/component/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TodoComponent,
    CommonModule,
    MatInputModule,
    FormsModule,
    ButtonAddComponent,
    DescriptionComponent,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isShow = false;
  title2!: string;

  getLS = getLocalStorage;
  setLS = setLocalStorage;
  isDisableAdd = true;
  isDisableDelete = false;
  isDisableDescription = false;
  isShowDescription = false;
  data = Data;
  btnTitle = 'Add';
  title!: string;
  index!: number;
  textarea!: string;
  textDescription!: string;
  titleDescription!: string;
  timeDescription!: string;

  constructor() {
    this.data = this.getLS();
    this.setLS(this.data);
  }

  onAddClick(input: HTMLInputElement) {
    if (this.btnTitle === 'Edit') {
      this.data[this.index].title = this.title;
      this.data[this.index].description = this.textarea;
      this.isDisableDelete = false;
    } else {
      this.data.push({
        id: this.data.length + 1,
        title: this.title,
        description: this.textarea,
        time: new Date().toLocaleTimeString(),
      });
    }
    this.btnTitle = 'Add';
    this.isDisableDescription = false;
    this.isDisableAdd = true;
    this.setLS(this.data);
    this.title = '';
    this.textarea = '';
    input.value = '';
  }

  onDelete(index: number) {
    this.isShow = !this.isShow;
    this.index = index;
    console.log('index', this.index);
  }

  onUpdate(event: IData[]) {
    this.data = event;
  }

  onShow(event: boolean) {
    this.isShow = event;
  }

  onEdit(index: number) {
    this.index = index;
    this.btnTitle = 'Edit';
    this.isDisableAdd = false;
    this.isDisableDelete = true;
    this.isDisableDescription = true;
    this.title = this.data[index].title;
    this.isShowDescription = false;
    this.textarea = this.data[index].description;
    this.data[index].time = new Date().toLocaleTimeString();
    this.textDescription = '';
  }

  onChangeInput(event: HTMLInputElement) {
    if (!event.value.trim().length) return (this.isDisableAdd = true);

    return (this.isDisableAdd = false);
  }

  onDescription(i: number) {
    this.isShowDescription = true;
    this.titleDescription = this.data[i].title;
    this.textDescription = this.data[i].description
      ? this.data[i].description
      : '--';
    this.timeDescription = this.data[i].time;
  }
}
