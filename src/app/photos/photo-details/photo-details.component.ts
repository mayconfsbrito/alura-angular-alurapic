import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.photoId;
        console.log(id);
    }
}