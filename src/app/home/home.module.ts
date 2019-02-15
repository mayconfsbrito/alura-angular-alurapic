import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule
    ]
})
export class HomeModule {}