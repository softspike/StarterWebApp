import { ValidatorFn, AbstractControl } from '@angular/forms';

export function autoCompleteSelected(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = control.value !== null && control.value.id !== null && control.value.id !== undefined;  
    return !isValid ? { 'autoCompleteSelected': { value: control.value } } : null;
  };
}
