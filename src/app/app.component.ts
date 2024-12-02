// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
// import { Data, IData } from './interface/todoitem.interface';
// import { TodoComponent } from './todo/todo.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [TodoComponent, CommonModule, MatInputModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   isDisable: boolean = true;
//   appData = Data;

//   pushTodo(event: HTMLInputElement) {
//     if (!event.value.trim().length) return;

//     this.appData.push({
//       id: this.appData.length + 1,
//       title: event.value.trim(),
//     });

//     this.isDisable = true;
//     event.value = '';
//   }

//   onChangeData(event: IData[]) {
//     this.appData = event;
//   }

// onChangeInput(event: HTMLInputElement) {
//   if (!event.value.trim().length) return (this.isDisable = true);

//   return (this.isDisable = false);
// }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Data } from './interface/todoitem.interface';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent, CommonModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDisable: boolean = true;
  data = Data;

  onAddClick(event: HTMLInputElement) {
    this.data.push({
      id: this.data.length + 1,
      title: event.value,
    });

    event.value = '';
    this.isDisable = true;
  }

  onChangeData(event: any) {
    this.data = event;
  }

  onChangeInput(event: HTMLInputElement) {
    if (!event.value.trim().length) return (this.isDisable = true);

    return (this.isDisable = false);
  }
}
