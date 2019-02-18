import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent
    ],
    exports: [
        PhotoDetailsComponent
    ]
})
export class PhotoDetailsModule {}