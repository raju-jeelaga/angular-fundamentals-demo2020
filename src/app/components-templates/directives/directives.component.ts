import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  color: string = 'pink';

  currentHero = {
    name: "Jeelagas",
  };

  nullHero = null; 

  heros = [{id:1,"name":"Raju",power:6352},
  {id:2,"name":"Raju123",power:6362},
  {id:3,"name":"RajuJ",power:6395},
  {id:4,"name":"Jeelaga Raju",power:6622},
  {id:5,"name":"Raju Jeelaga",power:5622}];

  differentHeroNames = [{"id":1,"name":"Ram","power":2612},
  {"id":2,"name":"Laxman","power":7036},
  {"id":3,"name":"Barath","power":3331},
  {"id":4,"name":"Shatrughna","power":5158},
  {"id":5,"name":"Hanuman","power":8948}];

  differentHeroIds = [{"id":11,"name":"Ram","power":2612},
  {"id":12,"name":"Laxman","power":7036},
  {"id":13,"name":"Barath","power":3331},
  {"id":14,"name":"Shatrughna","power":5158},
  {"id":15,"name":"Hanuman","power":8948}];


  ngOnInit(): void {
  }

  trackByHeros(index:number, hero): number{
    return hero.id;
  }
  updateWithDifferentNames(){
    this.heros = this.differentHeroNames
  }

  updateWithDifferentIds(){
    this.heros =  this.differentHeroIds
  }


}
