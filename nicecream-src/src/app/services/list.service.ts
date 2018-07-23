import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import List from '../models/list.model'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url = 'http://localhost:3000/yelp';
  constructor(private http: HttpClient) { }

  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.url);
  }
}


