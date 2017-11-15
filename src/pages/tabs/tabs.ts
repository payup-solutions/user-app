import { Menu } from './../../app/menu';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Tabs, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit {

  @ViewChild('mainTabs') mainTabs: Tabs;
  selectedIndex: number;

  pages = Menu.pages;

  constructor(navParams: NavParams) {
    const page = navParams.get('page');
    if (page != null) {
      this.selectedIndex = this.pages.indexOf(page);
    }
  }

  ngAfterViewInit() {
    this.mainTabs.select(this.selectedIndex);
  }

}
