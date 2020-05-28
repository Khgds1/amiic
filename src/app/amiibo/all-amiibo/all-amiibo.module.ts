import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAmiiboPageRoutingModule } from './all-amiibo-routing.module';

import { AllAmiiboPage } from './all-amiibo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllAmiiboPageRoutingModule
  ],
  declarations: [AllAmiiboPage]
})
export class AllAmiiboPageModule {}
