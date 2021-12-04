import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSS-Samples';
  value = 0;

  constructor(public store: Store<{ num: number }>) {
    this.store.select('num').subscribe((value1) => {
      if (value1) {
        // @ts-ignore
        this.value = value1.num;
        console.log(value1);
      }
    });
  }

  add = (val: number) => {
    this.store.dispatch({type: 'ADD'});
  };

  sub = (val: number) => {
    this.store.dispatch({type: 'SUB'});
  };
}
