import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-codes',
  templateUrl: 'codes.html'
})
export class CodesPage {
  public feeds: Array<string>;
  private url: string = "https://www.reddit.com/new.json";  

  //constructor(public navCtrl: NavController) {}

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.feeds = data.data.children;
    }); 
  }
}
