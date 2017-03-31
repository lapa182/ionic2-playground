import { Component } from '@angular/core';
import { ApiService } from '../../providers/api-service';

/*
  Generated class for the CompaniesList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'companies-list',
  templateUrl: 'companies-list.html'
})
export class CompaniesListComponent {

  apiService;
  favorities: any = [];
  unlike: any = [];
  companies: any = [];

  constructor(apiService:ApiService) {
    this.apiService = apiService;
  }

  ngOnInit() {
    this.apiService.findAll().then(data => this.companies = data);
  }

  swipeEvent(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    switch (event.direction) {
      case 2:
        this.unlike.push(target);
        break;
      case 4:
        this.favorities.push(target);
        break;
    }

    target.parentElement.remove();

  }

}
