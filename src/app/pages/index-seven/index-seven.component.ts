import { Component } from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-index-seven',
  templateUrl: './index-seven.component.html',
  styleUrls: ['./index-seven.component.scss']
})
export class IndexSevenComponent {
  ngOnInit(): void {
    Swiper.use([Navigation, Pagination, Scrollbar,Autoplay]);

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoplay: {
        delay: 5000,
      }
    });
  }

 
}
