import { CodeDomain } from './../../domain/CodeDomain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-codes',
  templateUrl: 'codes.html'
})
export class CodesPage implements OnInit {
  code = new CodeDomain();

  constructor() { }

  ngOnInit() { }

  saveCode() {
    console.log(this.code);
  }
}
