import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSlidePuzzleComponent } from './ng-slide-puzzle.component';

describe('NgSlidePuzzleComponent', () => {
  let component: NgSlidePuzzleComponent;
  let fixture: ComponentFixture<NgSlidePuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSlidePuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSlidePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
