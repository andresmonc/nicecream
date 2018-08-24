import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getGeoLocation() {
    return new Observable((observer) => {
      console.log('Geolocation working!');
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const success = (pos) => {
        const crd = pos.coords;
        console.log(`Longitude : ${crd.longitude}`);
        console.log(`Latitude : ${crd.latitude}`);
        const location = {
          "latitude": crd.latitude,
          "longitude": crd.longitude
        };
        console.log(location.latitude)
        observer.next(location);
        observer.complete();
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        observer.error(err);
        observer.complete();
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
  }
}
