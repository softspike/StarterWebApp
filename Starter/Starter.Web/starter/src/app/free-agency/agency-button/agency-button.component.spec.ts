import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgencyButtonComponent } from './agency-button.component';

describe('AgencyButtonComponent', () => {
  let component: AgencyButtonComponent;
  let fixture: ComponentFixture<AgencyButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
