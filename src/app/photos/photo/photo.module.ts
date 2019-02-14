import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotoModule {

}