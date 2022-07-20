import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentButtonComponent } from './tournament-button.component';

describe('TournamentButtonComponent', () => {
  let component: TournamentButtonComponent;
  let fixture: ComponentFixture<TournamentButtonComponent>;

  beforeEach(async(() => {
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
