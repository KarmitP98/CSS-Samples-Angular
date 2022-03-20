import {Component, Input, OnInit} from '@angular/core';

export type ProgressBarMode = 'determinate' | 'query' | 'indeterminate' | 'buffer';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  /**
   * Mode of progress bar
   * Any of 'determinate' | 'indeterminate' | 'query'
   * @type {ProgressBarMode}
   */
  @Input() mode: ProgressBarMode = 'determinate';
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
  @Input() backgroundColor?: string;
  /**
   * Progress Bar Color.
   * string: Solid Color.
   * string[]: Linear Gradient color.
   * @type {string | string[]}
   */
  @Input() barColor?: string | string[];
  /**
   * Height of the progress bar.
   * Inputs: '10px' | '10%' | '10rem' | ... etc.
   * @type {string}
   */
  @Input() height?: string;
  /**
   * Width of the progress bar.
   * Inputs: '100px' | '100%' | '10rem' | ... etc.
   * @type {string}
   */
  @Input() width?: string;
  /**
   * Selector to animate the 'buffer' progress-bar.
   * @type {boolean}
   */
  @Input() animatedBuffer = true;

  progressBarColor = '#000000';
  bufferProgressBarColor = 'repeating-linear-gradient(to bottom right, #000000 0px, #000000 10px, #ffffff 10px, #ffffff 20px)';

  constructor() {
  }

  ngOnInit() {
    this.progress = Math.min(this.progress, 100);
    this.setProgressBarColor();
  }

  /**
   * Set the progress bar color based on the input color/s.
   */
  private setProgressBarColor = () => {
    if (this.barColor && typeof this.barColor === 'string') {
      this.progressBarColor = this.barColor;
      this.bufferProgressBarColor = `repeating-linear-gradient(-45deg, ${this.barColor} 0px, ${this.barColor} 10px, #ffffff 10px, #ffffff 20px)`;
    } else if (this.barColor && Array.isArray(this.barColor)) {
      this.progressBarColor = `linear-gradient(to bottom right, ${this.barColor.join(',')})`;
      const bufferColors = this.barColor.map((value, index) => (`${value} ${index * 10}px, ${value} ${(index + 1) * 10}px`));
      this.bufferProgressBarColor = `repeating-linear-gradient(-45deg, ${bufferColors.join(',')})`;
    }
    console.log(this.progressBarColor);
    console.log(this.bufferProgressBarColor);
  };
}
