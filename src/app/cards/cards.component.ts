import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  ic1 = true;
  ic2 = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
