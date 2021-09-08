import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './Register.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [RegisterComponent],
    declarations: [RegisterComponent],
    providers: [],
})
export class RegisterModule { }
