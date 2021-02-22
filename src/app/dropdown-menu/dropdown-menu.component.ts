import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  //
  // @ViewChild('hammy', {static: false}) hammy: any;
  opened = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
    this.opened = !this.opened;
  }

}
