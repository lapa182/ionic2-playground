import { Component } from '@angular/core';
import { LoadingService } from "../../providers/loading-service";
import { ApiService } from "../../providers/api-service";
import { Company } from "../../models/company";

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
    private favorities: any = [];
    private unlike: any = [];
    public companies: Company[];

  constructor(public apiService:ApiService, private loadingService:LoadingService) {
    this.apiService = apiService;
    this.loadingService = loadingService;
  }
  
  // Adding as promise to control loading state
  ngOnInit() {
    return this.apiService.findAll().subscribe(data => {
      this.loadingService.toggleLoadingIndicator(false);
      this.companies = data;
    });
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
