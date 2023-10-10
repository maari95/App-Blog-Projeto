import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewPubPage } from '../view-pub/view-pub.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('carouselContent', { static: true }) carouselContent!: ElementRef;


  constructor(private modalCtrl: ModalController) { }


  ngOnInit() { }

  
  async abrirModal(post: any) {
    const modal = await this.modalCtrl.create({
      component:ViewPubPage,
      componentProps: {
        post : post
      }
    });

    await modal.present();
  }

  postagem = [
    { title: 'Curso de Python: Dominando a Linguagem de Programação', autor: 'wellington', img: 'assets/img/imagemB2.jpg', text: 'Python é uma das linguagens de programação mais populares e versáteis do mundo, conhecida por sua simplicidade e poder. Nosso curso de Python foi projetado para ajudar você a dominar essa linguagem desde o básico até níveis avançados. ' },
  ]

  news = [
    {img:'assets/img/imagemB9.webp'},
  ]

  salvarDadosLocalStorage() {
    localStorage.setItem('postagem', JSON.stringify(this.postagem));
    localStorage.setItem('news', JSON.stringify(this.news));
  }

  // Método para carregar os dados do localStorage
  carregarDadosLocalStorage() {
    // Verificar se há dados no localStorage antes de carregar
    if (localStorage.getItem('postagem')) {
      this.getPostagem();
    }
    if (localStorage.getItem('news')) {
      this.getNews();
    }
  }

  // Método para obter as postagens do localStorage
  getPostagem() {
    const postagemString = localStorage.getItem('postagem');
    if (postagemString) {
      this.postagem = JSON.parse(postagemString);
    }
  }

  // Método para obter as notícias do localStorage
  getNews() {
    const newsString = localStorage.getItem('news');
    if (newsString) {
      this.news = JSON.parse(newsString);
    }
  }



}



