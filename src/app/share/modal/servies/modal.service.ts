import { Injectable } from '@angular/core';
import { IData } from '../../../interface/todoitem.interface';
import { getLocalStorage } from '../../../localstorage/localstorage';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private data: IData[] = [];

  constructor() {
    this.data = getLocalStorage();
  }

  get() {
    return this.data;
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }
}
