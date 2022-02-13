import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-style-menu',
  templateUrl: './style-menu.component.html',
  styleUrls: ['./style-menu.component.scss']
})
export class StyleMenuComponent implements OnInit {

  currentMenu = 'Home';
  menus = ['Home', 'Profile', 'Cards', 'Setting', 'Data'];

  constructor() { }

  ngOnInit(): void {
  }

}
