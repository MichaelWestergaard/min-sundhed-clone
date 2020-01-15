import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informartion-cards',
  templateUrl: './informartion-cards.component.html',
  styleUrls: ['./informartion-cards.component.scss'],
})
export class InformartionCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  openUrl(){ window.open('https://www.dsb.dk/', '_system'); }

}
