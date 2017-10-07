import { CardsPage } from './../pages/cards/cards';
import { HistoryPage } from './../pages/history/history';
import { CodesPage } from './../pages/codes/codes';

export class Page {
  title: string;
  component: any;
  icon: string;

  constructor(title: string, component: any, icon: string) {
    this.title = title;
    this.component = component;
    this.icon = icon;
  }
}

export class Menu {

  static pages: Page[] = [new Page('Códigos', CodesPage, 'md-pricetags'),
  new Page('Histórico', HistoryPage, 'md-list'),
  new Page('Cartões', CardsPage, 'md-card')
  ];
}