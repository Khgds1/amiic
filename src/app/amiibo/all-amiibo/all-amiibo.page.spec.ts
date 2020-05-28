import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllAmiiboPage } from './all-amiibo.page';

describe('AllAmiiboPage', () => {
  let component: AllAmiiboPage;
  let fixture: ComponentFixture<AllAmiiboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAmiiboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllAmiiboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
