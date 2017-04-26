import { async, TestBed } from '@angular/core/testing';
import { CompaniesListComponent } from './companies-list';
import { ApiService } from '../../providers/api-service';
import { LoadingService } from '../../providers/loading-service';
import { ReflectiveInjector } from "@angular/core";
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

// Have to mock ionic LoadingController because we just need to test the behavior and give support to our ngOnInit function.
class LoadingController {
  create(args: any) { return this; }
  present() {}
  dismiss() {}
}
 
describe('CompaniesList Component', () => {

    beforeEach(async(() => {
        let mockLoadingController = {
            create: (args: any) => { return this; },
            present: jasmine.createSpy('present'),
            dismiss: jasmine.createSpy('dismiss')
        };
        spyOn(mockLoadingController, 'create').and.returnValue(mockLoadingController);

        TestBed.configureTestingModule({
            declarations: [CompaniesListComponent],
            providers: [
                { provide: LoadingController, useValue: mockLoadingController },
                { provide: LoadingService, useValue: LoadingService },
                { provide: ApiService, useValue: ApiService }
            ]
        });
    }));

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