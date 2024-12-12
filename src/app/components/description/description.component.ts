import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  @Input() isShow!: boolean;
  @Input() titleDescription!: string;
  @Input() textDescription!: string;
  @Input() timeDescription!: string;

  onChange() {
    if (!this.textDescription.trim().length) {
      return (this.textDescription = 'Пусто');
    }

    return;
  }
}
