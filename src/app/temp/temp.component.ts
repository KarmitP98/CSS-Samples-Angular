import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  temp = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}