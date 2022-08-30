import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitUserComponent } from './submit-user.component';

describe('SubmitUserComponent', () => {
  let component: SubmitUserComponent;
  let fixture: ComponentFixture<SubmitUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
