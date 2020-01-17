import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  user = null;

  constructor(private auth: AuthenticationService) {}
 
  ngOnInit() {
    this.user = this.auth.getUserInfo();
  }

}
