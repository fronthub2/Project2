import { IData } from '../interface/todoitem.interface';

export function getLocalStorage() {
  const noteJSON = localStorage.getItem('note');
  return noteJSON ? JSON.parse(noteJSON) : [];
}

export function setLocalStorage(note: IData[]) {
  localStorage.setItem('note', JSON.stringify(note));
}
