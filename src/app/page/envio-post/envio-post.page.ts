import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-envio-post',
  templateUrl: './envio-post.page.html',
  styleUrls: ['./envio-post.page.scss'],
})
export class EnvioPostPage implements OnInit {

  constructor(private platform: Platform, private file: File) { }

  ngOnInit() {
  }

}
