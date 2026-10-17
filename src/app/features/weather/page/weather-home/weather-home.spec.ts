import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherHome } from './weather-home';

describe('WeatherHome', () => {
  let component: WeatherHome;
  let fixture: ComponentFixture<WeatherHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherHome],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
