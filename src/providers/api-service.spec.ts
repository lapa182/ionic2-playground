import { ApiService } from './api-service';
import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
 
describe('Api Service', () => {

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            {provide: ConnectionBackend, useClass: MockBackend},
            {provide: RequestOptions, useClass: BaseRequestOptions},
            Http,
            ApiService,
        ]);
        this.apiService = this.injector.get(ApiService);
        this.backend = this.injector.get(ConnectionBackend) as MockBackend;
        this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    });


    it('findAll() should return some companies', fakeAsync(() => {
       let result: String[];
       this.apiService.findAll().then((companies: any) => result = companies);
       this.lastConnection.mockRespond(new Response(new ResponseOptions({
         body: [{
                    "id": 1,
                    "name": "Hackett, Treutel and Hartmann",
                    "description": "facilitate sexy supply-chains",
                    "logo_url": "https://example1.jpg",
                    "website_url": "http://cristnienow.info/alyon",
                    "created_at": "2015-02-12T19:01:34.529Z",
                    "updated_at": "2015-02-12T19:01:34.529Z"
                },
                {
                    "id": 2,
                    "name": "Huels, Walsh and Lakin",
                    "description": "unleash compelling systems",
                    "logo_url": "https://example2.jpg",
                    "website_url": "http://prohaskajast.name/benton",
                    "created_at": "2015-02-12T19:01:36.726Z",
                    "updated_at": "2015-02-12T19:01:36.726Z"
                },
                {
                    "id": 3,
                    "name": "Walker Group",
                    "description": "optimize sexy architectures",
                    "logo_url": "https://example3.jpg",
                    "website_url": "http://runolfonoconner.biz/marcos_mckenzie",
                    "created_at": "2015-02-12T19:01:38.207Z",
                    "updated_at": "2015-02-12T19:01:38.207Z"
                }],
       })));
       tick();
       expect(result.length).toEqual(3, 'should contain given amount of companies');
     }));
 
});