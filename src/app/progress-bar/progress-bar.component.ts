import {Component, Input, OnInit} from '@angular/core';
import {
  ProgressBarAngularBarColor,
  ProgressBarAngularBorderRadius,
  ProgressBarAngularMode
} from './progress-bar-angular.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  /**
   * Mode of progress bar
   * Any of 'determinate' | 'indeterminate' | 'query' | 'buffer'
   * @type {ProgressBarAngularMode}
   */
  @Input() mode: ProgressBarAngularMode = 'determinate';
  /**
   * Progress Values of Progress Bar: Accepted Values are numbers between 0 and 100
   * @type {number}
   */
  @Input() progress = 0;
  /**
   * Background Color of the progress bar.
   * Input is a string of '#FFFFFF' or 'rgba(r,g,b,a)' or 'linear-gradient(<colors>)'
   * @type {string}
   */
  @Input() backgroundColor = 'rgba(0,0,0,0.15)';
  /**
   * Progress Bar Color.
   * string: Solid Color.
   * string[]: Linear Gradient color.
   * @type {string | string[]}
   */
  @Input() barColor?: ProgressBarAngularBarColor;
  /**
   * Height of the progress bar.
   * Inputs: '10px' | '10%' | '10rem' | ... etc.
   * @type {string}
   */
  @Input() height = '20px';
  /**
   * Width of the progress bar.
   * Inputs: '100px' | '100%' | '10rem' | ... etc.
   * @type {string}
   */
  @Input() width = '100%';
  /**
   * Selector to animate the 'buffer' progress-bar.
   * @type {boolean}
   */
  @Input() animated = false;
  /**
   * Border Radius of the progress bar
   * @type {ProgressBarAngularBorderRadius}
   */
  @Input() borderRadius?: ProgressBarAngularBorderRadius = 'md';

  constructor() {
  }

  ngOnInit() {
    this.progress = Math.min(this.progress, 100);
  }

  /**
   * Get Progress Bar Color
   * @returns {string | undefined}
   */
  getProgressBarColor = () => {
    if (this.barColor) {
      if (typeof this.barColor === 'string') {
        if (this.mode === 'buffer') {
          return `${this.barColor} 0px, ${this.barColor} 10px, #ffffff 10px, #ffffff 20px`;
        }
        return `${this.barColor} ${this.barColor}`;
      } else {
        if (this.mode === 'buffer') {
          return this.barColor?.map((value, index) => (`${value} ${index * 10}px, ${value} ${(index + 1) * 10}px`)).join(',');
        }
        return this.barColor?.join(',');
      }
    } else {
      if (this.mode === 'buffer') {
        return `black 0, black 10px, white 10px, white 20px`;
      }
      return `black, black`;
    }
  };

}
