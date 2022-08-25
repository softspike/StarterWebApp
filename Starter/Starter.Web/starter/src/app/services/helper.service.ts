import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';


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



