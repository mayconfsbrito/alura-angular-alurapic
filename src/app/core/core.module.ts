import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from './auth/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {}