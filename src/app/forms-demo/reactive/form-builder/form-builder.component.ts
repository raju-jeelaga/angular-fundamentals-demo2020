import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileBuilderGroup.valueChanges.subscribe(changesObj => {
      console.log(changesObj)
    });
  }


  profileBuilderGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      state: [''],
      city: [''],
      street: [''],
      zip: ['']
    }),
  });

  onSubmit(){
    console.log(this.profileBuilderGroup.value);
    console.log(this.profileBuilderGroup.status);
    console.log(this.profileBuilderGroup.valid);
  }

  updatePatchValues(){
    this.profileBuilderGroup.patchValue({
      firstName: 'Anil',
      address:{
        city:'Secunderabad',
      }
    });
  }

  updateAllValues(){
    this.profileBuilderGroup.setValue({
      firstName: 'Kumar',
      lastName: 'Jeelaga',
      address:{
        state: 'Bang',
        city: 'US',
        street: 'AP',
        zip: '12345',
      },
    });
  }

}
