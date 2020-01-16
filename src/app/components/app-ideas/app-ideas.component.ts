import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppIdeasPage } from 'src/app/pages/app-ideas/app-ideas.page';

@Component({
  selector: 'app-app-ideas',
  templateUrl: './app-ideas.component.html',
  styleUrls: ['./app-ideas.component.scss'],
})
export class AppIdeasComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async showModal() {
    const modal = await this.modalController.create({
      component: AppIdeasPage,
      cssClass: 'rounded'
    });
    return await modal.present();
  }

}
