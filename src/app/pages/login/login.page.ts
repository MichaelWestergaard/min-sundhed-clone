import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users = {
    username: 'Michael',
    password: null
  };

  numbers: number[] = [];

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {}

  addNumber(number){
    if(this.numbers.length != 4){
      this.numbers.push(number);
      if(this.numbers.length == 4){
        this.users.password = this.numbers.join("");
        this.login();
      }
    }
  }

  deleteNumber(){
    if(this.numbers.length != 0){
      this.numbers.pop();
    }
  }

  login() {
    this.numbers.length = 0;
    this.auth.login(this.users).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/member');
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Login fejlede',
          message: 'Prøv igen',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

}
