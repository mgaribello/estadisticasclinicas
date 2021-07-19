import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css'],
})
export class DataComponentComponent implements OnInit {
  public rutaatencion = ['Cancer de Mama', 'Covid-19', 'Dolor Lumbar'];
  public eps = ['Compensar', 'Sanitas', 'Nueva EPS'];
  public gruposedad = ['60 años o mas', 'Entre 40 y 59', 'Entre 20 y 39'];
  public porcentaje = 60;

  public psicologia = 65;
  public nutricion = 45;
  public trabajosocial = 30;
  public enfermeria = 60;
  public cuidadopaleativo = 85;

  public porcentajedinamico: any;

  constructor() {}

  ngOnInit(): void {}

  fnvalidaporcentaje() {
    console.log(this.porcentajedinamico);
    if (this.porcentajedinamico === 'Cancer de Mama') {
      this.porcentaje = 50;
      this.psicologia = 30;
      this.nutricion = 20;
      this.trabajosocial = 90;
      this.enfermeria = 45;
      this.cuidadopaleativo = 80;
    }
    if (this.porcentajedinamico === 'Covid-19') {
      this.porcentaje = 90;
      this.psicologia = 80;
      this.nutricion = 70;
      this.trabajosocial = 40;
      this.enfermeria = 25;
      this.cuidadopaleativo = 30;
    }

    if (this.porcentajedinamico === 'Dolor Lumbar') {
      this.porcentaje = 90;
      this.psicologia = 10;
      this.nutricion = 35;
      this.trabajosocial = 22;
      this.enfermeria = 82;
      this.cuidadopaleativo = 30;
    }
  }

  fndetalle() {
    alert('Detalle de Diagnostico');
  }
}
