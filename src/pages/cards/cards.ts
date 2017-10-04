import { CardDomain } from './../../domain/CardDomain';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from "lodash";

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})

export class CardsPage implements OnInit {
  number: string = "";
  validate: string = "";
  name: string = "";
  cvv: string = "";

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

  saveCard() {
    let card = new CardDomain();
    card.number = this.number;
    card.validate = this.validate;
    card.name = this.name;
    card.cvv = this.cvv;
    console.log(card);
  }
}
