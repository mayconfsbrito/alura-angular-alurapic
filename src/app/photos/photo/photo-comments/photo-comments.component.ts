import { Input, Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commentForm: FormGroup;

    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.initValidarcaoForm();
    }

    private initValidarcaoForm() {
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }
}