import { CardsService } from './card-service';
import { CardDomain } from './../../domain/CardDomain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
  providers: [CardsService]
})
export class CardsPage implements OnInit {
  cardList: CardDomain[] = [];
  card = new CardDomain();
  textMask: any;
  showAdd: boolean = true;
  showList: boolean = false;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    let card1 = new CardDomain();
    card1.flagUrl = "http://woltag.com/wp-content/photos/2014/09/Mastercard-logo.jpg";
    card1.name = "Jota Card";
    card1.number = "1234 1234 1234 1234";
    card1.expirationDate = '9/19';
    this.cardList.push(card1);
  }

  newCard() {
    this.showAdd = false;
    this.showList = true;
  }

  saveCard(form) {
    if (this.isNotValidCard(form)) {
      return;
    }

    this.cardsService.save(this.card).$observable.subscribe(
      card => {
        this.cardList.push(card);
        this.card = new CardDomain();
      },
      error => {
        // TODO show error message
      },
      () => {
        this.showAdd = true;
        this.showList = false;
      });
  }

  isNotValidCard(form) {
    // TODO AJUST VALIDATION
    // if (!form.valid) {
    //   //TODO SHOW MESSAGE
    //   return true;
    // }

    return false;
  }

  removeItem(item) {
    // for (i = 0; i < this.cardList.length; i++) {
    //   if (this.cardList[i] == item) {
    //     this.cardList.splice(i, 1);
    //   }
    // }
  }
}
