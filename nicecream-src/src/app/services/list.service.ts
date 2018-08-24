import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
import { map } from 'rxjs/operators';
import { GeolocationService } from '../services/geolocation.service';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {

    constructor(private http: HttpClient, private geoServ: GeolocationService) { }



    private serverApi = 'http://localhost:3000';
    public getAllLists(): Observable<List[]> {
        return this.geoServ.getGeoLocation().pipe(
            mergeMap(({ latitude, longitude }) =>
                this.http.get<any>(`${this.serverApi}/yelp/?lat=${latitude}&long=${longitude}`)
            ),
            map(res => res.businesses));
    }

}