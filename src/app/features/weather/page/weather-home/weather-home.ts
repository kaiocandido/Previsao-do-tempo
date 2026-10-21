import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Weather } from '../../services/weather';
import { WeatherData } from '../../../../models/interfaces/WeatherDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCard } from '../../components/weather-card/weather-card';

@Component({
  imports: [FormsModule, FontAwesomeModule, WeatherCard],
  selector: 'app-weather-home',
  templateUrl: './weather-home.html',
})
export class WeatherHome implements OnInit, OnDestroy {

  private readonly weatherService = inject(Weather);
  private readonly destroi$: Subject<void> = new Subject();

  initialCityName = "São Paulo";
  weatherDatas!: WeatherData;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeather(cityName).pipe(
      takeUntil(this.destroi$)
    ).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error),
    });
  }

  onSubmite(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = "";
  }

  ngOnDestroy(): void {
    this.destroi$.next();
    this.destroi$.complete();
  }


}
