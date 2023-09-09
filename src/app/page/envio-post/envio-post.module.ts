import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvioPostPageRoutingModule } from './envio-post-routing.module';

import { EnvioPostPage } from './envio-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvioPostPageRoutingModule
  ],
  declarations: [EnvioPostPage]
})
export class EnvioPostPageModule {}
