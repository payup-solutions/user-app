import { TransactionDomain } from './../../domain/TransactionDomain';
import { AppSettings } from './../../app/app.settings';
import { CardDomain } from './../../domain/CardDomain';
import { Http, RequestMethod } from '@angular/http';
import { Injectable, Injector } from '@angular/core';
import { Resource, ResourceMethod, ResourceParams, ResourceAction } from 'ng2-resource-rest';



@Injectable()
@ResourceParams({
    url: AppSettings.API_ENDPOINT + '/transactions',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export class TransactionService extends Resource {

    @ResourceAction({
        method: RequestMethod.Get,
        isArray: true
    })
    getConsumerTransactions: ResourceMethod<TransactionDomain, TransactionDomain[]>;

    constructor(http: Http, injector: Injector) {
        super(http, injector);
    }

}