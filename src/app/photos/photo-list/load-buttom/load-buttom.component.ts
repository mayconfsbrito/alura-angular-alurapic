import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from './../../photo/photo.service';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-buttom.component.html',
  styleUrls: ['./load-buttom.component.scss']
})
export class LoadButtomComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PhotoService: PhotoService
  ) { }

  ngOnInit() {
  }

}
