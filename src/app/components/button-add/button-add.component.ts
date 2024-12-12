import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-add',
  imports: [MatTooltipModule],
  templateUrl: './button-add.component.html',
  styleUrl: './button-add.component.scss',
})
export class ButtonAddComponent {
  @Input() btnTitle!: string;
  @Input() isDisable!: boolean;

  onChangeTooltip() {
    if (this.isDisable) return;

    return this.btnTitle === 'Add' ? 'Добавить' : 'Изменить';
  }
}
