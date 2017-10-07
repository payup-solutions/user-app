import { InputMask } from './../../directive/InputMask';
import { CardDomain } from './../../domain/CardDomain';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})

export class CardsPage implements OnInit {
  card = new CardDomain();

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

  saveCard() {
    console.log(this.card);
  }
}
