import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../../models/interfaces/WeatherDatas';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [FontAwesomeModule, DecimalPipe],
  selector: 'app-weather-card',
  templateUrl: './weather-card.html',
})
export class WeatherCard {
  @Input() WeatherDatasInput!: WeatherData;

  mintempuraturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidIcon = faDroplet;
  windIcon = faWind;
}
