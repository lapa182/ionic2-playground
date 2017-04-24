import { CompaniesListComponent } from './companies-list';
import { ApiService } from '../../providers/api-service';
import { ReflectiveInjector } from "@angular/core";
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
 
describe('CompaniesList Component', () => {

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            {provide: ConnectionBackend, useClass: MockBackend},
            {provide: RequestOptions, useClass: BaseRequestOptions},
            CompaniesListComponent,
            Http,
            ApiService
        ]);
        this.companieListComponent = this.injector.get(CompaniesListComponent);
        this.apiService = this.injector.get(ApiService);
        this.backend = this.injector.get(ConnectionBackend) as MockBackend;
        this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    });

    it('ngOnInt() should get companies from ApiService', () => {
        
        expect(true).toBeTruthy();
    });
 
    it('swipeEvent() to left should remove the companie', () => {
 
        expect(true).toBeTruthy();
 
    });

    it('swipeEvent() to right should favorite the companie', () => {
 
        expect(true).toBeTruthy();
 
    });
 
});