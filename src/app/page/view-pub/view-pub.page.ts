import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-view-pub',
  templateUrl: './view-pub.page.html',
  styleUrls: ['./view-pub.page.scss'],
})
export class ViewPubPage implements OnInit {


  @Input() post: any;
  
  constructor(private modalCtrl: ModalController) { }

  
  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

}
