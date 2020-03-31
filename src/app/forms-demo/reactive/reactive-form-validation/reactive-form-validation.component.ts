import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { forbiddenNameValidator} from '../../../shared/validators/forbidden-name.validator';
import { UniqueUserNameValidator } from '../../../shared/validators/unique-user-name.async-validator';
@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  powers = ["Raju", "Jeelaga", "RITHVIK", "prince", "Chitthuri"];

  constructor( private fb: FormBuilder, private uniqueUserNameValidator: UniqueUserNameValidator) { }

  heroFormGroup : FormGroup;
  ngOnInit(): void {
    this.heroFormGroup = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
      'alterEgo': [''],
      'power': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'seconderyEmail': ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'available': ['yes', Validators.required],
      'nickName': ['', [Validators.required, forbiddenNameValidator(['Raju', 'Jeelaga', 'Prince'])]],
      'userName': ['', [Validators.required, this.uniqueUserNameValidator.validate.bind(this.uniqueUserNameValidator)]]
    });
  }

  get name() { return this.heroFormGroup.get('name'); }
  
  get power() { return this.heroFormGroup.get('power'); }

  get email() { return this.heroFormGroup.get('email'); }

  get seconderyEmail() { return this.heroFormGroup.get('seconderyEmail'); }

  get available() { return this.heroFormGroup.get('available'); }

  get nickName() { return this.heroFormGroup.get('nickName'); }

  get userName() { return this.heroFormGroup.get('userName'); }

}
