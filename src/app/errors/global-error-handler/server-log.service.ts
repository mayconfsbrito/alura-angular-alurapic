import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServerLogService {

    constructor(private http: HttpClient) {}

    log(log: ServerLog) {
        return this.http.post(environment.ApiServerLog + 'infra/log', log);
    }
}