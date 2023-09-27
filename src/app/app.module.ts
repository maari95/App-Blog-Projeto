import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat';
import {FirestoreModule} from '@angular/fire/firestore';

import { configuracao } from 'src/environments/configuracao';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(configuracao),
    FirestoreModule,
    HttpClientModule

  ],

  providers: [{ provide: RouteReuseStrategy, 
  useClass: IonicRouteStrategy },
  
], 
  bootstrap: [AppComponent],
})

export class AppModule {}
