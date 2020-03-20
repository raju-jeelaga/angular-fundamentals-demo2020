import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ViaTrackSerService {

  constructor(private http:HttpClient) { }

  private todoSubject = new Subject();

  public todoObservable$ = this.todoSubject.asObservable();

  track(todo){
    let action = `${todo.title} is ${todo.done ? `is` : `is not`} completed`;
    this.todoSubject.next(action);
    
  }
}
