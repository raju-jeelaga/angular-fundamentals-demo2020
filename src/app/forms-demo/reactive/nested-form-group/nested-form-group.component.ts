import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe(chnagesObj => {
      console.log(chnagesObj);
    })
  }

  onSubmit(){
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }

  profileFormGroup = new FormGroup({
    firstName : new FormControl( '', Validators.required),
    lastName : new FormControl( ''),
    address : new FormGroup( {
      state: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl('')
    })
  });

  updateFewProfileControlers(){
     this.profileFormGroup.patchValue({
       firstName: 'Jeelagas',
       address : {
        city: 'vijayawada',
       }
     })
  }

  updateAllProfileControlers(){
      this.profileFormGroup.setValue({
        firstName: 'Rithvik',
        lastName: 'Jeelaga',
        address:{
          state: 'Telangana',
          city: 'Hyderbad',
          street: 'Yousufguda',
          zip: '',
        }
      });
  }

}
