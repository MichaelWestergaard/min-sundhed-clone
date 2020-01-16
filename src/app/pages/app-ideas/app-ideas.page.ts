import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-app-ideas',
  templateUrl: './app-ideas.page.html',
  styleUrls: ['./app-ideas.page.scss'],
})
export class AppIdeasPage implements OnInit {

  constructor(private navController: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    console.log("clicked");
    this.modalController.dismiss();
  }

}
