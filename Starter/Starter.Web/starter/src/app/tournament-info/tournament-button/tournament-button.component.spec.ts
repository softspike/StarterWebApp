import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TournamentButtonComponent } from './tournament-button.component';

describe('TournamentButtonComponent', () => {
  let component: TournamentButtonComponent;
  let fixture: ComponentFixture<TournamentButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
