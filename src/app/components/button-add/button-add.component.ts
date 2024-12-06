import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  imports: [],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.scss',
})
export class ButtonAddComponent {
  @Input() btnTitle!: string;
  @Input() isDisable!: boolean;
}
