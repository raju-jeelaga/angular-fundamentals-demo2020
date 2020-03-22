import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsDemoService {

  constructor() { 
    this.emitNubers();
  }
  numbers: Array<number> = [1, 2, 3, 4, 5];

  numbersObservable$ : Observable<number> = Observable.create(observer => {
    let id = 0;
    let intervalID = setInterval( ()=> {
      observer.next(this.numbers[id]);
      if (id == this.numbers.length -1){
       observer.complete();
       clearInterval(intervalID);
      } else {
        ++id;
      }
    }, 1000);
  });

  numbersSubject = new Subject<number>();

  emitNubers() {
    let id = 0;

    let intervalId = setInterval(() => {
      this.numbersSubject.next(this.numbers[id]);
      if (id === this.numbers.length - 1) {
        this.numbersSubject.complete();
        clearInterval(intervalId);
      } else {
        ++id;
      }
    }, 1000);
  }

  numbersSubjectObservable$ = this.numbersSubject.asObservable();


}
