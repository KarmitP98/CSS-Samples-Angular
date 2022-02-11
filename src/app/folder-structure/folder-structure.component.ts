import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent implements OnInit {

  activeTab = 0;
  tabs = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: number): void {
    this.activeTab = tab;
  }

}
