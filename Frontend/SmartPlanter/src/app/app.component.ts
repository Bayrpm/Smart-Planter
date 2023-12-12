import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'mail' },
    { title: 'Registro', url: 'registro', icon: 'paper-plane' },
    { title: 'historial', url: 'historial', icon: 'heart' },
    { title: 'sensor', url: 'sensor', icon: 'archive' },
    { title: 'asistencia', url: 'asistencia', icon: 'trash' },
  ];

  constructor() {}
}
