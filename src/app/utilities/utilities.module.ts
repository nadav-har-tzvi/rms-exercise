import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import {MatDialogModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [SafePipe],
  exports: [SafePipe],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class UtilitiesModule { }
