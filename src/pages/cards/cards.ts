import { InputMask } from './../../directive/InputMask';
import { CardDomain } from './../../domain/CardDomain';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage implements OnInit {
  cardList: CardDomain[] = [];
  card = new CardDomain();
  textMask: any;
  showAdd: boolean = true;
  showList: boolean = false;

  constructor() { }

  ngOnInit() {
    let card1 = new CardDomain();
    card1.flagUrl = "http://woltag.com/wp-content/photos/2014/09/Mastercard-logo.jpg";
    card1.name = "Jota Card";
    card1.number = "1234 1234 1234 1234";
    card1.validate = new Date(2019, 9, 11);
    this.cardList.push(card1);
  }

  newCard() {
    this.showAdd = false;
    this.showList = true;
  }

  saveCard() {
    // if (this.card != null) {
    //   if (this.card.name.length > 0 && this.card.number.length == 19 && this.card.cvv.length == 3) {
    //     this.card.flagUrl = "http://woltag.com/wp-content/photos/2014/09/Mastercard-logo.jpg";
    //     this.cardList.push(this.card);
    //   }
    // }

    this.showAdd = true;
    this.showList = false;
    console.log(this.card);
  }

  removeItem(item) {
    // for (i = 0; i < this.cardList.length; i++) {
    //   if (this.cardList[i] == item) {
    //     this.cardList.splice(i, 1);
    //   }
    // }
  }
}
