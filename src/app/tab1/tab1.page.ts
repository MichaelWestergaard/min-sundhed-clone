import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  user = null;

  constructor(private auth: AuthenticationService) {}
 
  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }
 
  logout() {
    this.auth.logout();
  }

}
