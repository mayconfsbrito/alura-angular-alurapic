import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AlertType, Alert } from './alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouterChange = false;

    constructor(router: Router) {
        router.events.subscribe(event => this.subscribeRouteChange(event));
    }

    success(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.SUCCESS, message, keepAfterRouterChange);
    }

    info(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.INFO, message, keepAfterRouterChange);
    }

    warning(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.WARNING, message, keepAfterRouterChange);
    }

    danger(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.DANGER, message, keepAfterRouterChange);
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }

    private alert(alertType: AlertType, message: string, keepAfterRouterChange: boolean) {
        this.keepAfterRouterChange = keepAfterRouterChange;
        this.alertSubject.next(new Alert(alertType, message));
    }

    private clear() {
        this.alertSubject.next(null);
    }

    private subscribeRouteChange(event: any) {
        if (event instanceof NavigationStart) {
            if (this.keepAfterRouterChange) {
                this.keepAfterRouterChange = false;
            } else {
                this.clear();
            }
        }
    }
}