import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {MatDialog} from '@angular/material/dialog';
import {DialogLoadingComponent} from './dialog-loading/dialog-loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSS-Samples';
  value = 0;
  progress = 100;

  constructor(public store: Store<{ num: number }>,
              private dialog: MatDialog) {
    this.store.select('num').subscribe((value1) => {
      if (value1) {
        // @ts-ignore
        this.value = value1.num;
        console.log(value1);
      }
    });

    // setInterval(() => {
    //   if (this.progress === 100) {this.progress = -1; }
    //   this.progress += 5;
    // }, 1000);
  }

  add = (val: number) => {
    this.store.dispatch({type: 'ADD'});
  };

  sub = (val: number) => {
    this.store.dispatch({type: 'SUB'});
  };

  public showLoadingDialog(): void {
    this.dialog.open(DialogLoadingComponent, {id: 'loading-dialog'});
  }
}
