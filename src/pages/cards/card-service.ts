import { AppSettings } from './../../app/app.settings';
import { CardDomain } from './../../domain/CardDomain';
import { Http, RequestMethod } from '@angular/http';
import { Injectable, Injector } from '@angular/core';
import { Resource, ResourceMethod, ResourceParams, ResourceAction } from 'ng2-resource-rest';



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

    @ResourceAction({
        method: RequestMethod.Get,
        isArray: true
    })
    getConsumerCards: ResourceMethod<CardDomain, CardDomain[]>;

    @ResourceAction({
        method: RequestMethod.Delete,
        path: '/{!id}'
    })
    delete: ResourceMethod<{id: number}, Boolean>;

    @ResourceAction({
        method: RequestMethod.Get,
        path: '/activate/{!id}'
    })
    activateCard: ResourceMethod<{id: number}, CardDomain>;
    
    constructor(http: Http, injector: Injector) {
        super(http, injector);
    }

}