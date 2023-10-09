import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-pub',
  templateUrl: './view-pub.page.html',
  styleUrls: ['./view-pub.page.scss'],
})
export class ViewPubPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

}
