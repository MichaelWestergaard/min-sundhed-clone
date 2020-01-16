import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppIdeasPage } from './app-ideas.page';

describe('AppIdeasPage', () => {
  let component: AppIdeasPage;
  let fixture: ComponentFixture<AppIdeasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIdeasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppIdeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
