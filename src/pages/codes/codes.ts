import { CodeDomain } from './../../domain/CodeDomain';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as _ from "lodash";

@Component({
  selector: 'page-codes',
  templateUrl: 'codes.html'
})
export class CodesPage implements OnInit {
  codePlace: string = "";
  codeNFC: string = "";

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

  saveCode() {
    let code = new CodeDomain();
    code.codePlace = this.codePlace;
    code.codeNFC = this.codeNFC;
    console.log(code);
  }
}
