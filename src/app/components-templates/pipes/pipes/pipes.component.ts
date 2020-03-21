import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birtday = new Date (2020,3,21);

  name: string = "J Rithvik Babu";
  
  heros = [
    {name: 'Windstorm', canFly: true},
    {name: 'Bombasto',  canFly: false},
    {name: 'Magneto',   canFly: false},
    {name: 'Tornado',   canFly: true}
  ];

  constructor() { }

  ngOnInit(): void {

  }

  newHero = {
    name: '',
    canFly: true
  };

  pushHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    };
    // Here heroes array reference is not changed. Pushed another element to same array.
    // So, Pure pipe don't detect this change 
    this.heros.push(heroObj);
    this.newHero.name = '';
  }
  
  concatHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    };
    // Here we are changing the reference of the heroes array on concat
    // Pure pipe will respond to this change
    this.heros = this.heros.concat(heroObj);
    this.newHero.name = '';
  }
  
}
