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

  ngOnInit(): void {
  }

}
