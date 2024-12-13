import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IData } from '../../../../interface/todoitem.interface';
import { setLocalStorage } from '../../../../localstorage/localstorage';
import { ModalService } from '../../servies/modal.service';

@Component({
  selector: 'app-modal',
  imports: [],
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() index!: number;
  @Input() isShow!: boolean;
  @Output() isShowEvent = new EventEmitter<boolean>();
  @Output() dataEvent = new EventEmitter<IData[]>();

  data = inject(ModalService);

  getData = this.data.get();

  onShow(event: boolean) {
    this.isShowEvent.emit(event);
  }

  onDelete() {
    this.data.delete(this.index);
    setLocalStorage(this.getData);
    this.onUpdate(this.getData);
    this.onShow(false);
  }

  onUpdate(event: IData[]) {
    this.dataEvent.emit(event);
  }
}
