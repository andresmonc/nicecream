import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import { List } from '../models/list.model';
import { map } from 'rxjs/operators';
@Injectable()
export class ListService {

    constructor(private http: Http) { }

    private serverApi = 'https://intense-chamber-50128.herokuapp.com';

    public getAllLists(): Observable<List[]> {

        const URI = `${this.serverApi}/yelp/`;
        return this.http.get(URI)
            .pipe(map(res => res.json()))
            .pipe(map(res => <List[]>res.businesses));
    }
}
