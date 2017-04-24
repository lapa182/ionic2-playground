import { ReflectiveInjector } from "@angular/core";
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
 
describe('CompaniesList Component', () => {

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            {provide: ConnectionBackend, useClass: MockBackend},
            {provide: RequestOptions, useClass: BaseRequestOptions},
            Http,
        ]);
        this.backend = this.injector.get(ConnectionBackend) as MockBackend;
        this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    });

    it('ngOnInt() should be true', () => {
        
        expect(true).toBeTruthy();
    });
 
});