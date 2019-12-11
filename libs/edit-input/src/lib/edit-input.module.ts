import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInputComponent } from './edit-input.component';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [EditInputComponent, AutoFocusDirective],
  exports: [EditInputComponent]
})
export class EditInputModule {}
