
import { AbstractControl, ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(names: Array<string>): ValidatorFn{
    return (control:AbstractControl): object | null =>{
        return names.indexOf(control.value) > -1 ? {'frobiddenName': { value : control.value}} : null;
    }
}

