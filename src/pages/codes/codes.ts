import { CodeService } from './code.service';
import { CodeDomain } from './../../domain/CodeDomain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-codes',
  templateUrl: 'codes.html',
  providers: [CodeService]
})
export class CodesPage implements OnInit {
  code: string;
  codeDomain: CodeDomain;

  constructor(private codeService: CodeService) { }

  ngOnInit() { 
    this.getCurrentCode();
  }

  activate() {
    // TODO START LOADING SCREEN
    this.codeService.activate({code: this.code}).$observable.subscribe(
      code => {
        this.codeDomain = code;
      },
      error => {
        // TODO show error message
      },
      () => {
        //TODO FINISH LOADING SCREEN
      });
  }

  getCurrentCode() {
    // TODO START LOADING SCREEN
    this.codeService.getCurrentCode().$observable.subscribe(
      code => {
        this.codeDomain = code;
      },
      error => {
        // TODO show error message
      },
      () => {
        //TODO FINISH LOADING SCREEN
      });
  }

  deactivate() {
    // TODO START LOADING SCREEN
    this.codeService.deactivate({id: this.codeDomain.id}).$observable.subscribe(
      response => {
        this.codeDomain = null;
        // TODO SHOW SUCCESS
      },
      error => {
        // TODO show error message
      },
      () => {
        //TODO FINISH LOADING SCREEN
      });
  }
}
