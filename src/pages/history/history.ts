import { HistoryDomain } from './../../domain/history';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from "lodash";

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage implements OnInit {
  histList: HistoryDomain[] = [];
  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
    let hist1 = new HistoryDomain();
    hist1.src = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png";
    hist1.title = "R$ 400,00";
    hist1.description = "Chalezinho - Fillipe Pitta";
    hist1.date = new Date(2015, 9, 10);
    this.histList.push(hist1);

    hist1 = _.cloneDeep(hist1);
    hist1.date = new Date(2015, 9, 11);
    this.histList.push(hist1);

    hist1 = _.cloneDeep(hist1);
    hist1.date = new Date(2015, 9, 12);
    this.histList.push(hist1);

    hist1 = _.cloneDeep(hist1);
    hist1.date = new Date(2015, 9, 13);
    this.histList.push(hist1);
  }
}
