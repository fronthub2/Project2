import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.dialog.component.html',
  styleUrl: './modal.dialog.component.scss',
})
export class ModalDialogComponent {
  @Input() title!: string;
}
