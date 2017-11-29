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
  currentCode: CodeDomain;

  constructor(private codeService: CodeService) { }

  ngOnInit() { 
    this.getCurrentCode();
  }

  activate(form) {
    if (this.isNotValidCode(form)) {
      return;
    }
    // TODO START LOADING SCREEN
    this.codeService.activate({code: this.code}).$observable.subscribe(
      code => {
        this.currentCode = code;
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
        if (code.id != null) {
          this.currentCode = code;
        }
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
    this.codeService.deactivate({id: this.currentCode.id}).$observable.subscribe(
      response => {
        this.currentCode = null;
        // TODO SHOW SUCCESS
      },
      error => {
        // TODO show error message
      },
      () => {
        //TODO FINISH LOADING SCREEN
      });
  }

  isNotValidCode(form) {
    if (!form.valid) {
      //TODO SHOW INVALID MESSAGE
      return true;
    }

    return false;
  }
}
