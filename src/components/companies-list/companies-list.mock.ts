import { Component, OnInit } from '@angular/core';
import { LoadingService } from "../../providers/loading-service";
import { ApiService } from "../../providers/api-service";
import { Company } from "../../models/company";

@Component({
  selector: 'companies-list',
  templateUrl: 'companies-list.html'
})
export class CompaniesListComponent implements OnInit {
    public companies: Company[];

    constructor(public apiService:ApiService, private loadingService:LoadingService) {}
  
    // Adding as promise to control loading state
    ngOnInit() {
        this.apiService.findAll().subscribe(companies => {
            this.companies = companies;
        });
    }

}
