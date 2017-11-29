import { CardsService } from './card.service';
import { CardDomain } from './../../domain/CardDomain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
  providers: [CardsService]
})
export class CardsPage implements OnInit {
  cardList: CardDomain[] = [];
  card: CardDomain;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getConsumerCards();
  }

  // INITIAL REQUESTS

  getConsumerCards() {
    // TODO START LOADING SCREEN
    this.cardsService.getConsumerCards().$observable.subscribe(
      cards => {
        this.cardList = cards;
      },
      error => {
        // TODO show error message
      },
      () => {
        // TODO FINISH LOADING SCREEN
      }
    );
  }

  // BUTTON ACTIONS
  backToList() {
    this.card = null;
  }

  removeCard() {
    // TODO START LOADING SCREEN
    this.cardsService.delete(this.card).$observable.subscribe(
      () => {
        // TODO show success message
        this.cardList.splice(this.cardList.indexOf(this.card), 1);
        this.card = null;
      },
      error => {
        // TODO show error message
      },
      () => {
        // TODO FINISH LOADING SCREEN
      });
  }

  saveCard(form) {
    if (this.isNotValidCard(form)) {
      return;
    }

    // TODO START LOADING SCREEN
    this.cardsService.save(this.card).$observable.subscribe(
      card => {
        if (this.card.id == null) {
          this.cardList.push(card);
        }
      },
      error => {
        // TODO show error message
      },
      () => {
        this.card = null;
        //TODO FINISH LOADING SCREEN
      });
  }

  activateCard() {
    // TODO START LOADING SCREEN
    this.cardsService.activateCard(this.card).$observable.subscribe(
      card => {
        this.cardList.forEach(oldActiveCard => oldActiveCard.active = false);
        this.card.active = true;
        // TODO SUCCESS MESSAGE
      },
      error => {
        // TODO show error message
      },
      () => {
        // TODO FINISH LOADING SCREEN
      });
  }

  isNotValidCard(form) {
    // TODO AJUST VALIDATION
    // if (!form.valid) {
    //   //TODO SHOW INVALID MESSAGE
    //   return true;
    // }

    return false;
  }
  
  newCard() {
    this.card = new CardDomain();
  }

  showOptions(card: CardDomain) {
    this.card = card;
  }
}
