import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileBuilderCheck.valueChanges.subscribe(changesObj =>{
      console.log(changesObj);
    })
  }

  profileBuilderCheck = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      village: [''],
      pin: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases(){
    console.log(this.profileBuilderCheck.get('aliases'));
    return this.profileBuilderCheck.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''))
  }

  onSubmit(){
    console.log(this.profileBuilderCheck.value);
    console.log(this.profileBuilderCheck.status);
    console.log(this.profileBuilderCheck.valid);
  }

  updatePatchValues(){
    this.profileBuilderCheck.patchValue({
      firstName: 'XYZ',
      address: {
        pin: 123
      },
    });
  }


  updateSetvalues(){
    this.profileBuilderCheck.setValue({
      firstName: 'Raju',
      lastName: 'Paul',
      address:{
        city: 'village',
        village: 'mandal',
        pin: '987456321'
      },
      aliases:['John', 'Doe', 'Dude']
    });

  }

}
