import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformartionCardsComponent } from './informartion-cards.component';

describe('InformartionCardsComponent', () => {
  let component: InformartionCardsComponent;
  let fixture: ComponentFixture<InformartionCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformartionCardsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformartionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
