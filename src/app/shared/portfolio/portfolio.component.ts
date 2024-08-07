import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',

  
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  filteredRecord: any;

  constructor(public _lightbox: Lightbox) {}
  data = [
    {
      title: 'Planta Fotovoltaica',
      text: 'Abstract',
      src: 'assets/images/portfolio/fotovoltaica.png',
      type: 'Renovables'
    },
    {
      title: 'Puerto Cartagena',
      text: 'Abstract',
      src: 'assets/images/portfolio/puerto_cartagena.jpg',
      type: 'Alta Tensión'
    },
    
  ];

  
  open(index: number): void {
    this._lightbox.open(this.filteredRecord, index);
  }

  ngOnInit() {
    this.filteredRecord = this.data;
  }
}
