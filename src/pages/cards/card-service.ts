import { AppSettings } from './../../app/app.settings';
import { HttpModule } from '@angular/http';
import { CardDomain } from './../../domain/CardDomain';
import { Http, Headers, RequestMethod } from '@angular/http';
import { Injectable, Injector } from '@angular/core';
import { Resource, ResourceMethod, ResourceParams, ResourceAction, ResourceResult } from 'ng2-resource-rest';



@Injectable()
@ResourceParams({
    url: AppSettings.API_ENDPOINT + '/cards',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export class CardsService extends Resource {

    @ResourceAction({
        method: RequestMethod.Post
    })
    save: ResourceMethod<CardDomain, CardDomain>;

    constructor(http: Http, injector: Injector) {
        super(http, injector);
    }

}