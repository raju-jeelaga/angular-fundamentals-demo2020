import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.profileFormGroup.valueChanges.subscribe(changesObj => {
      console.log(changesObj);
    })
  }

  profileFormGroup = new FormGroup({
    firstName : new FormControl ('', Validators.required),
    lasName : new FormControl('')
  })

  onSubmit(){
    console.log(this.profileFormGroup.value);
    console.log(this.profileFormGroup.status);
    console.log(this.profileFormGroup.valid);
  }

}
