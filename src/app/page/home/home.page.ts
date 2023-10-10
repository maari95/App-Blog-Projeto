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


  ngOnInit() {
    // Movendo o carrossel a cada 3 segundos
    setInterval(() => {
      this.moveCarousel();
    }, 3000);

    this.carregarDadosLocalStorage();
  }

  moveCarousel() {
    const carouselItemWidth = this.carouselContent.nativeElement.querySelector('.carousel-item').offsetWidth;

    this.carouselContent.nativeElement.style.transform = 'translateX(-' + carouselItemWidth + 'px)';
    setTimeout(() => {
      this.carouselContent.nativeElement.appendChild(this.carouselContent.nativeElement.firstElementChild);
      this.carouselContent.nativeElement.style.transition = 'none';
      this.carouselContent.nativeElement.style.transform = 'translateX(0)';
      setTimeout(() => {
        this.carouselContent.nativeElement.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }, 500);
  }
  
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
    { title: 'post 1', autor: 'wellington', img: 'assets/img/imagemB2.jpg', text: 'bla bla bla bla' },
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



