import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { ModalController } from '@ionic/angular';
import { NewsDetailsPage } from 'src/app/pages/news-details/news-details.page';


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})


export class NewsCardComponent implements OnInit {

  slideOptions = {
    slidesPerView: 1.2,
    freeMode: false,
  }

  news: News[] = [
    {
      title: "Forældre får påmindelse om vaccination",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate. Itaque amet pariatur, eligendi autem nobis impedit, perferendis excepturi adipisci quod quisquam illum ut illo rem tenetur similique consectetur sint?",
      createdAt: new Date().getTime(),
      image: "../assets/images/syringe-3902915_1280-700x466.jpg"
    },
    {
      title: "Mange ved ikke, de lider af KOL",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate. Itaque amet pariatur, eligendi autem nobis impedit, perferendis excepturi adipisci quod quisquam illum ut illo rem tenetur similique consectetur sint?",
      createdAt: new Date().getTime(),
      image: "../assets/images/kol.jpg"
    },
    {
      title: "Gravide tilbydes gratis vaccine",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate. Itaque amet pariatur, eligendi autem nobis impedit, perferendis excepturi adipisci quod quisquam illum ut illo rem tenetur similique consectetur sint?",
      createdAt: new Date().getTime(),
      image: "../assets/images/gravid.jfif"
    },
    {
      title: "Positiv udvikling i sundhedsvæsenet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate. Itaque amet pariatur, eligendi autem nobis impedit, perferendis excepturi adipisci quod quisquam illum ut illo rem tenetur similique consectetur sint?",
      createdAt: new Date().getTime(),
      image: "../assets/images/prioritering_politik_og_sundhed_top.png"
    }
  ];
  
          
  constructor(private modalController: ModalController) { }
  ngOnInit() {
  }

  async showModal(article) {
    const modal = await this.modalController.create({
      component: NewsDetailsPage,
      componentProps: {
        'article': article
      }
    });
    return await modal.present();
  }

}
