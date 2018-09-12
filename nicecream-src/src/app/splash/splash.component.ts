import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { Router } from '@angular/router';
import { delay } from 'q';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private geoServ: GeolocationService, private router: Router) { }

  ngOnInit() {
  }
  getAlert() {
    console.log('test');
    this.geoServ.getGeoLocation();
  }

  showLoading() {
    $('#test1').fadeOut();
    $('.test').delay(1000).fadeIn();
    setTimeout(() => {
      this.router.navigate(["/results"]);
    }, 8500);
  }
}
