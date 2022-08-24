import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class FormHelperService {

  constructor() { }

setModel(model: any, formGroup:UntypedFormGroup){
  Object.keys(formGroup.controls).forEach(key => {
    model[key] = formGroup.controls[key].value;
  });
}

}