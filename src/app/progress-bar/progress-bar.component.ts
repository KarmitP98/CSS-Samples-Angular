import {Component, Input, OnInit} from '@angular/core';

export type ProgressBarMode = 'determinate' | 'query' | 'indeterminate';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() mode: ProgressBarMode = 'determinate';
  @Input() progress = 0;
  @Input() backgroundColor?: string;
  @Input() barColor?: string;

  constructor() {}

  ngOnInit() {}

}
