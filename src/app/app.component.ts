import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: 'home', icon: 'home' },
    { title: 'Últimas notícias', url: 'postagens', icon: 'newspaper' },
    { title: 'Nova postagem', url: 'envio-post', icon: 'add' },
    { title: 'Contato', url: 'contact', icon: 'chatbox-ellipses' },
    { title: 'Sobre', url: 'sobre', icon: 'information' },
<<<<<<< HEAD
    
=======

>>>>>>> 0556d20d6847f45ff80f7aa469e56c91e27a7053
    
  ];

  

  constructor() {}
}
