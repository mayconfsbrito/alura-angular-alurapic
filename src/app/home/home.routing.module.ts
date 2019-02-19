import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [ LoginGuard ],
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup',
                component: SignupComponent,
                data: {
                    title: 'Sign up'
                }
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}