import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmiiboPageRoutingModule } from './amiibo-routing.module';

import { AmiiboPage } from './amiibo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmiiboPageRoutingModule
  ],
  declarations: [AmiiboPage]
})
export class AmiiboPageModule {}
