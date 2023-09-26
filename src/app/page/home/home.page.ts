import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('carouselContent', { static: true }) carouselContent!: ElementRef;
  constructor(){ }

  ngOnInit() {
    // Movendo o carrossel a cada 3 segundos
    setInterval(() => {
      this.moveCarousel();
    }, 3000);
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

}
