import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { FormBuilder, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { FormHelperService } from '../services/helper.service';
import { UserModel } from '../models/models.model';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formGroup: UntypedFormGroup;
  model = new UserModel;
  private alive: true;


  constructor(private fb: FormBuilder,
            public service: UserService,
            private snackBarService: SnackbarService,
            public helper: FormHelperService) { 
              this.buildForm();
            }

  ngOnInit() {
  }

  buildForm(){
      this.formGroup = this.fb.group({
        userName: [null, [Validators.required]],
        email: [null , [Validators.required, Validators.email]],
        fullName: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.pattern('[A-Za-z0-9()\'+;:=?!%&amp;&lt;&gt;*/ ,.\-]{3,20}')]],
      })

  }

  create() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.invalid){
      return;
    }
    this.helper.setModel(this.model, this.formGroup);
    this.service.registerUser(this.model)
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any) => {
        console.log(response);
      }
    ,
    (error: any) => {

      this.snackBarService.show(error.error.errors[0].description);
    });
  }
}