import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('./assets/json/users.json');
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.http.get<User[]>('assets/json/users.json').pipe(
      map(users => users.find(user => user.id === id))
    );
  }
}
