import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
