import { Component, OnInit } from '@angular/core';
import { SubjectsDemoService } from '../subjects-demo.service';
import {
  Observable, 
  Subject, 
  from,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  constructor(public subjectsDemoService: SubjectsDemoService ) { }

  initTime: number;
  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];
  namesSubjectLogs: string[] = [];
  regularSubjectLogs: string[] = [];
  behaviorSubjectLogs: string[] = [];
  replySubjectLogs: string[] = [];
  asyncSubjectLogs: string[] = [];


  ngOnInit(): void {
    this.initTime = Date.now();

    /******** Observable subscribers ********/
    this.subjectsDemoService.numbersObservable$.subscribe(n => {
      this.observableLogs.push(`At ${this.getTimeDifference()} seconds: Observer1: ${n}`)
    }); // Subscriber 1

    setTimeout(() => {
      this.subjectsDemoService.numbersObservable$.subscribe(n => {
        this.observableLogs.push(`At ${this.getTimeDifference()} seconds: Observer2: ${n}`)
      });
    }, 1500); // Subscriber 2

    /******** Subject subscribers ********/
    this.subjectsDemoService.numbersSubject.subscribe(n =>{
      this.subjectLogs.push(`At ${this.getTimeDifference()} seconds: Observer1:${n}`)
    }); // Sub 1

    setTimeout( ()=> {
      this.subjectsDemoService.numbersSubject.subscribe(n =>{
        this.subjectLogs.push(`At ${this.getTimeDifference()} seconds: Observer2 : ${n}`)
      })
    }, 1500);

     /***************** Subject Types *******************/
    // Regular Subject
    let regularSubject = new Subject();

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push('observer1: ' + v)
    });

    regularSubject.next(1);
    regularSubject.next(2);

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push('observer2: ' + v)
    });

    regularSubject.next(3);
    regularSubject.next(4);

    // Behaviour Subject
    let behaviorSubject = new BehaviorSubject(0); // 0 is the initial value

    behaviorSubject.subscribe({
      next: (v) => this.behaviorSubjectLogs.push('observer1: ' + v)
    });

    behaviorSubject.next(1);
    behaviorSubject.next(2);

    behaviorSubject.subscribe({
      next: (v) => this.behaviorSubjectLogs.push('observer2: ' + v)
    });

    behaviorSubject.next(3);



  } // ngOnInit

  private getTimeDifference() {
    return ((Date.now() - this.initTime) / 1000).toFixed(1);
  }

}
