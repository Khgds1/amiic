import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangelogPageRoutingModule } from './changelog-routing.module';

import { ChangelogPage } from './changelog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangelogPageRoutingModule
  ],
  declarations: [ChangelogPage]
})
export class ChangelogPageModule {}
