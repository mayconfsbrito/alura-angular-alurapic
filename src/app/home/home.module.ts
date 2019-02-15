import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignupComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {}