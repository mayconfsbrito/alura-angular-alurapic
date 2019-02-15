import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        if(this.userService) {
            this.router.navigate(['user', this.userService.getUserName()]);
            return false;
        }
        return true;
    }
        
}