import { Component, OnInit } from '@angular/core';

import { ViaTrackSerService } from './via-track-ser.service';

@Component({
  selector: 'app-via-ser',
  templateUrl: './via-ser.component.html',
  styleUrls: ['./via-ser.component.css'],
  providers: [ViaTrackSerService]
})
export class ViaSerComponent implements OnInit {

  userActions = [];

  constructor( public tracker: ViaTrackSerService) { }

  ngOnInit() {
       this.tracker.todoObservable$.subscribe(todoAction => {
         this.userActions.push(todoAction);
       });
     }

  todos = [
    {id:1, title: 'Raju bill', done: false},
    {id:2, title: 'Jeelaga', done: true},
    {id:3, title: 'Kumar', done: false},
    {id:4, title: 'Anil', done: true},
    {id:5, title: 'Rithvik', done: false},
    {id:6, title: 'Jeelaga', done: true},
  ];

}
