import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient){}

    listFromUser(userName: string) {
        return this.http.get<Object[]>(API + '/flavio/photos');
    }
}