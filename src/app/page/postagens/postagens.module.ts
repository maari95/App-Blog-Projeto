import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostagensPageRoutingModule } from './postagens-routing.module';

import { PostagensPage } from './postagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostagensPageRoutingModule
  ],
  declarations: [PostagensPage]
})
export class PostagensPageModule {}
