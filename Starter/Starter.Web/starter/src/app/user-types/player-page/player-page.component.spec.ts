import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerPageComponent } from './player-page.component';

describe('PlayerPageComponent', () => {
  let component: PlayerPageComponent;
  let fixture: ComponentFixture<PlayerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
