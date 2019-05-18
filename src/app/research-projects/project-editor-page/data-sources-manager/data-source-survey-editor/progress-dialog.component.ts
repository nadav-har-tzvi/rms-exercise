import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface ProgressDialogData {
  dialogTitle?: string,
  dialogProgressMessage?: string
}

@Component({
  selector: 'app-progress-dialog',
  templateUrl: './progress-dialog.component.html'
})
export class ProgressDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: ProgressDialogData) {
  }

  ngOnInit() {
  }

}
