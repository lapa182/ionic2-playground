import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ApiService } from './api-service';
import { MockCompanies } from './api-service.mock';

describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ]
    });
  });

  it('should create a service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return companies', inject([ApiService, MockBackend], (service: ApiService, backend: MockBackend) => {
    let response = new ResponseOptions({
      body: JSON.stringify(MockCompanies)
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );

    return service.findAll().subscribe( data => {
      expect(data).toEqual(MockCompanies);
    });
  }));
});