import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmiiboPage } from './amiibo.page';

describe('AmiiboPage', () => {
  let component: AmiiboPage;
  let fixture: ComponentFixture<AmiiboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmiiboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
