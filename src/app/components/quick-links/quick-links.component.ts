import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss'],
})
export class QuickLinksComponent implements OnInit {

  slideOptions = {
    slidesPerView: 1.2,
    freeMode: false,
  }

  constructor() { }

  ngOnInit() {}

}
