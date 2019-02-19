import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        API_URL + '/user/login',
        { userName, password },
        { observe: 'response'}
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
        console.log(authToken);
      }));
  }
}
