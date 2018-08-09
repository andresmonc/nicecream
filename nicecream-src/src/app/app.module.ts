import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { SplashComponent } from './splash/splash.component';
import { ListService } from './services/list.service';
import { GeolocationService } from './services/geolocation.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultsPageComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule
  ],
  providers: [ListService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
