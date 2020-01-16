import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  article;

  ngOnInit() {
    this.article = this.navParams.get('article');
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
