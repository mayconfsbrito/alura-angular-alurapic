import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadButtomComponent } from './load-buttom.component';

describe('LoadButtomComponent', () => {
  let component: LoadButtomComponent;
  let fixture: ComponentFixture<LoadButtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadButtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
