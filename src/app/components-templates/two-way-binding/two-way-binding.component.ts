import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  currentHero = {
    name:"Raju",
  }
  constructor() { }

  ngOnInit(): void {
  }

  setUppercase(value){
    this.currentHero.name = value.toUppercase(); 
  }

  setUpperCase(value) {
    this.currentHero.name = value.toUpperCase();
  }

  
}
