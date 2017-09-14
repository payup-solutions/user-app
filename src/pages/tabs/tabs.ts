import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { CardsPage } from '../cards/cards';
import { CodesPage } from '../codes/codes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  codes = CodesPage;
  history = HistoryPage;
  cards = CardsPage;

  constructor() {

  }
}
