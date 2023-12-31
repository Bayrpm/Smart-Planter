import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {

  apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getSensorHumedadAmbiente(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar-datos-sensor-data/`);
  }

  getSensorSuelo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar-datos-sensor-suelo/`);
  }

}
