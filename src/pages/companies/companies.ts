import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesListComponent } from '../../components/companies-list/companies-list';
import { LoadingService } from "../../providers/loading-service";
import { Subscription } from "rxjs/Subscription";

/*
  Generated class for the Companies page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
  entryComponents:[
    CompaniesListComponent
  ],
  providers: [LoadingService]// inject all grouped components here
})
export class CompaniesPage {
  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingService:LoadingService) {}

  ngOnInit() {
    this.subscription = this.loadingService.isLoading.subscribe(loading => this.loadingService.showOrHideLoadingIndicator(loading));
  }

  ngOnDestroy() {         
      this.subscription.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompaniesPage');
    this.loadingService.toggleLoadingIndicator(true);
  }

}
