import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TestDialogComponent>) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }


  public printHelloWorld(): void {
    console.log('Hello World');
  }
}
