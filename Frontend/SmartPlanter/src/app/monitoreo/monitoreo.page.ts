import { Component, OnInit } from '@angular/core';

import { SensoresService } from '../sensores.service';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.page.html',
  styleUrls: ['./monitoreo.page.scss'],
})
export class MonitoreoPage implements OnInit {

  datosSensorHumedadAmbiente: any;
  datosSensorSuelo: any;

  constructor(private sensoresService: SensoresService,
              private ToastController: ToastController) { }

  ngOnInit() {
    this.obtenerDatosSensorHumedadAmbiente();
    this.ObtenerDatosSensorSuelo();
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

  ObtenerDatosSensorSuelo() {
    this.sensoresService.getSensorSuelo().subscribe(
      (datos) => {
        this.datosSensorSuelo = datos;
        console.log('Datos de sensor de humedad suelo:', this.datosSensorSuelo);

        // Verificar si la humedad del suelo es menor al 50%
        if (this.datosSensorSuelo[0]?.humidity_ground < 50) {
          this.mostrarAlertaHumedadBaja();
        }

        if (this.datosSensorSuelo[0]?.humidity_ground < 45) {
          this.mostrarAlertaRiegoAutomatico();
        }

        if (this.datosSensorSuelo[0]?.humidity_ground > 60) {
          this.mostrarAlertaHumedadEstable();
        }
      },
      (error) => {
        console.error('Error al obtener datos del sensor de humedad suelo:', error);
      }
    );
  }

  async mostrarAlertaHumedadBaja() {
    const toast = await this.ToastController.create({
      message: '¡La humedad del suelo ha bajado por debajo del 50%!',
      duration: 10000,
      position: 'bottom',
      cssClass: 'custom-toast-message'
    });
    toast.present();
  }

  async mostrarAlertaRiegoAutomatico() {
    const toast = await this.ToastController.create({
      message: '¡El riego automático ha comenzado!',
      duration: 10000,
      position: 'bottom',
      cssClass: 'custom-toast-message'
    });
    toast.present();
  }

  async mostrarAlertaHumedadEstable() {
    const toast = await this.ToastController.create({
      message: 'La humedad de la tierra estable, muy bien hecho!',
      duration: 10000,
      position: 'bottom',
      cssClass: 'custom-toast-message'
    });
    toast.present();
  }

  actualizarDatos() {
    this.obtenerDatosSensorHumedadAmbiente();
    this.ObtenerDatosSensorSuelo();
  }

}
