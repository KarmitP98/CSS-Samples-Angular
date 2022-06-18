import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TestDialogComponent} from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-dialog-loading',
  templateUrl: './dialog-loading.component.html',
  styleUrls: ['./dialog-loading.component.scss']
})
export class DialogLoadingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openAnotherDialog(): void {
    this.dialog.open(TestDialogComponent, {id: 'test-dialog'});
  }
}
