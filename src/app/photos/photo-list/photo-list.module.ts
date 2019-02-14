import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtomComponent } from './load-buttom/load-buttom.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from './../photo/photo.module';
import { CardModule } from './../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtomComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
    CommonModule,
        PhotoModule,
        CardModule
    ]
})
export class PhotoListModule{}