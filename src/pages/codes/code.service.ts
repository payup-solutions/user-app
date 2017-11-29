import { CodeDomain } from './../../domain/CodeDomain';
import { AppSettings } from './../../app/app.settings';
import { Http, RequestMethod } from '@angular/http';
import { Injectable, Injector } from '@angular/core';
import { Resource, ResourceMethod, ResourceParams, ResourceAction } from 'ng2-resource-rest';



@Injectable()
@ResourceParams({
    url: AppSettings.API_ENDPOINT + '/codes',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export class CodeService extends Resource {

    @ResourceAction({
        method: RequestMethod.Get,
        path: "/activate/{!code}"
    })
    activate: ResourceMethod<{code: string}, CodeDomain>;

    @ResourceAction({
        method: RequestMethod.Get,
        path: '/deactivate/{!id}'
    })
    deactivate: ResourceMethod<{id: number}, Boolean>;

    @ResourceAction({
        method: RequestMethod.Get
    })
    getCurrentCode: ResourceMethod<CodeDomain, CodeDomain>;

    constructor(http: Http, injector: Injector) {
        super(http, injector);
    }

}