import { Injectable, Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Weather {

  private readonly apiKey = '4bb68ce590c854e0222bff634be3ed23';
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  private readonly http = inject(HttpClient);

  getWeather(cityName: string): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        q: cityName,
        units: 'metric',
        appid: this.apiKey,
      },
    });
  }

}
