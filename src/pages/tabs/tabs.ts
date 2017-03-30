import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { CompaniesPage } from '../companies/companies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  home: any = HomePage;
  about: any = AboutPage;
  companies: any = CompaniesPage;

  constructor() {

  }
}
