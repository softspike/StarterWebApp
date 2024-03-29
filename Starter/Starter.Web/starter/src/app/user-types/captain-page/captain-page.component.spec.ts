import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaptainPageComponent } from './captain-page.component';

describe('CaptainPageComponent', () => {
  let component: CaptainPageComponent;
  let fixture: ComponentFixture<CaptainPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
