import { Routes } from '@angular/router';
import { WeatherHome } from './features/weather/page/weather-home/weather-home';

export const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  {path: "weather", component: WeatherHome},
];
