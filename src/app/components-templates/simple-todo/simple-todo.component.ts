import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoTrackerService } from './todo-tracker.service';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css'],
  providers: [TodoTrackerService]
})
export class SimpleTodoComponent implements OnInit {

     userActions = [];

     constructor( public tracker: TodoTrackerService) {}

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
