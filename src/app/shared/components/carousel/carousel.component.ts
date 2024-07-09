// carousel.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() smallImages: string[] = [];
  activeIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
