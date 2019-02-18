import { Input, Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo-comment';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;

    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService
    ) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
    }
}