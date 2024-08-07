import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      logo: 'adjust-circle',
      title: 'Licencia de apertura',
      desc: 'Gestionamos las licencias de apertura de negocios de todo tipo de actividad tanto comercial como industrial',
      link : 'portfolio-detail-licencias'
    },
    {
      logo: 'circuit',
      title: 'Certificado de eficiencia energética',
      desc: 'Emitimos y visamos certificado de eficiencia energética de inmuebles e instalaciones industriales ',
      shadow:true,
      link : 'portfolio-detail-licencias'
    },
    {
      logo: 'fire',
      title: 'Proyectos eléctricos de baja tensión',
      desc: 'Elaboramos proyecto eléctrico para realizar una instalación eléctrica nueva o para realizar una reforma o modificación sustancial de una instalación ya existente',
      link : 'portfolio-detail-licencias'
    },
    {
      logo: 'flower',
      title: 'Proyectos de infraestructuras comunes de telecomunicaciones ICT',
      desc: 'Elaboramos  proyecto de infraestructuras de comunicaciones para inmuebles  y unidades industriales contemplando servicios de radiodifusión, cableado y comunicaciones',
      shadow:true,
      link : 'portfolio-detail-licencias'
    },
    {
      logo: 'shopping-basket',
      title: 'Planes Autoprotección',
      desc: 'Elaboramos plan de autoprotección abordando la identificación y evaluación de los riesgos, las acciones y medidas necesarias para la prevención y control de riesgos, así como las medidas de protección y otras actuaciones a adoptar en caso de emergencia',
      link : 'portfolio-detail-licencias'
    },
    {
      logo: 'flip-h',
      title: 'Proyectos Electricidad Alta Tensión',
      desc: 'Realizamos proyectos de redes de distribución, líneas de transporte y subestaciones de transformación para polígonos industriales, desarrollos agrícolas  y planes urbanísticos',
      shadow:true,
      link : 'portfolio-detail-licencias'
    }
  ]
}
