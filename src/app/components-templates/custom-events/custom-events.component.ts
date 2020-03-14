import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {


  serves =[
    {"id":1,"name":"Raju","power":9600},
    {"id":2,"name":"Jeelaga","power":6600},
    {"id":3,"name":"Anil","power":68500},
    {"id":4,"name":"Rithvik","power":65600},
    {"id":5,"name":"Prince","power":60420},

]
  
  constructor() { }

  ngOnInit() {
  }

  delete(serveObj) {
    console.log(serveObj);
  }

}
