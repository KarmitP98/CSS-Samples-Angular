import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toast', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        style({
          opacity: 0,
          // transform: 'translateX(100px)'
        }),
        animate(300)
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {

  toasts: string[] = [];
  index = 0;

  constructor() {

    this.pushToast();

    // this.toasts.push('Toast 1');
  }

  ngOnInit(): void {
  }

  pushToast(): void {
    setTimeout(() => {
      this.toasts.push('Toast ' + this.index++);
      // this.pushToast();
      // setTimeout(() => this.toasts.splice(0, 1), 1000);
    }, 1000);
  }

  removeToast(toast: string) {
    this.toasts.splice(this.toasts.indexOf(toast), 1);
  }
}
