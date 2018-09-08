import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private geoServ: GeolocationService) { }

  ngOnInit() {
  }
  getAlert() {
    console.log('test');
    this.geoServ.getGeoLocation();
  }


}
