import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  private apiUrl = 'http://127.0.0.1:8000/api/sensordata/';

  constructor(private http: HttpClient) { }

  getSensorData() {
    return this.http.get(this.apiUrl);
  }
}
