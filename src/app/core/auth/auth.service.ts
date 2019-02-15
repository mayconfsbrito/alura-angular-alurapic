import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string): Observable {
    return this.http
      .post(
        API_URL + '/user/login',
        {userName, password },
        { observe: 'response'}
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        console.log(authToken);
      }));
  }
}
