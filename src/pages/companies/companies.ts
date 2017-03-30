import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompaniesListComponent } from '../../components/companies-list/companies-list';

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
  ] // inject all grouped components here
})
export class CompaniesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompaniesPage');
  }

}
