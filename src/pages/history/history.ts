import { TransactionTypeDomain } from './../../domain/TransactionTypeDomain';
import { TransactionService } from './transaction.service';
import { TransactionDomain } from './../../domain/TransactionDomain';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [TransactionService]
})
export class HistoryPage implements OnInit {
  transactions: TransactionDomain[] = [];
  getIconName = TransactionTypeDomain.getIconName;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public transactionService: TransactionService) {
  }
  
  ngOnInit() {
    this.getTransactions();
  }

  // INITIAL REQUESTS

  getTransactions() {
    // TODO START LOADING SCREEN
    // TODO IMPLEMENT PAGINATION
    this.transactionService.getConsumerTransactions().$observable.subscribe(
      cards => {
        this.transactions.push(...cards);
      },
      error => {
        // TODO show error message
      },
      () => {
        // TODO FINISH LOADING SCREEN
      }
    );
  }
}
