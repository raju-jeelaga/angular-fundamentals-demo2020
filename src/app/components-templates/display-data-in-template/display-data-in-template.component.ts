import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  template: `
    <h4>{{title}}</h4>
    <h4>My favorite hero is: {{myHero}}</h4>
  `,
  styleUrls: ['./display-data-in-template.component.css']
})
export class DisplayDataInTemplateComponent implements OnInit {

  title = 'Tour of Heroes';
  myHero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
