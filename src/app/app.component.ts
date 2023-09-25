import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: 'home', icon: 'home' },
    { title: 'Nova postagem', url: 'envio-post', icon: 'add' },
    { title: 'Contato', url: 'contact', icon: 'chatbox-ellipses' },
    { title: 'Sobre', url: 'sobre', icon: 'information' },
    { title: 'Login', url: 'login', icon: 'person' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
