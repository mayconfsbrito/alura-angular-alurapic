import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AlertType, Alert } from './alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();

    success(message: string) {
        this.alert(AlertType.SUCCESS, message);
    }

    info(message: string) {
        this.alert(AlertType.INFO, message);
    }

    warning(message: string) {
        this.alert(AlertType.WARNING, message);
    }

    danger(message: string) {
        this.alert(AlertType.DANGER, message);
    }

    private alert(alertType: AlertType, message: string) {
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }
}