import { Component, OnInit } from '@angular/core';

import { SensoresService } from '../sensores.service';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.page.html',
  styleUrls: ['./monitoreo.page.scss'],
})
export class MonitoreoPage implements OnInit {

  datosSensorHumedadAmbiente: any;

  constructor(private sensoresService: SensoresService) { }

  ngOnInit() {
    this.obtenerDatosSensorHumedadAmbiente();
  }

  obtenerDatosSensorHumedadAmbiente() {
    this.sensoresService.getSensorHumedadAmbiente().subscribe(
      (datos) => {
        this.datosSensorHumedadAmbiente = datos;
        console.log('Datos de sensor de humedad ambiente:', this.datosSensorHumedadAmbiente);
        // Aquí puedes manipular o mostrar los datos en tu página según sea necesario
      },
      (error) => {
        console.error('Error al obtener datos del sensor de humedad ambiente:', error);
      }
    );
  }

}
