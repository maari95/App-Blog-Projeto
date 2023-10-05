import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPubPageRoutingModule } from './view-pub-routing.module';

import { ViewPubPage } from './view-pub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPubPageRoutingModule
  ],
  declarations: [ViewPubPage]
})
export class ViewPubPageModule {}
