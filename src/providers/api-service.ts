import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

const SERVER_URL = "https://landing.jobs/api/v1/";

@Injectable()
export class ApiService {
  
  constructor(public http: Http) {
    this.http = http;
  }

  findAll() {

    return this.http.get(SERVER_URL + '/companies')
          .map(res => res.json())
          .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
