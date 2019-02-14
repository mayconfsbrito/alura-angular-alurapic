import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
    ]
})

export class PhotosModule {}