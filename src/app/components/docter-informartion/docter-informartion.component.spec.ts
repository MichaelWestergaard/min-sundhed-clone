import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocterInformartionComponent } from './docter-informartion.component';

describe('DocterInformartionComponent', () => {
  let component: DocterInformartionComponent;
  let fixture: ComponentFixture<DocterInformartionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocterInformartionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocterInformartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
