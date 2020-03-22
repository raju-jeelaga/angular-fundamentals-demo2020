import { Component, OnInit } from '@angular/core';
import { fromEvent, observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

  fromEventLogs: string[] = [];
  ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  fromLogs: string[] = [];
  ofLogs: string[] = [];
  customObservableLogs: string[] = [];
  customObservable2Logs: string[] = [];
  customObservable3Logs: string[] = [];
  arrayCustomObservableLogs: string [] = [];

  constructor() { }

  ngOnInit(): void {

    /***** fromEvent *****/
    const additnEvent = document.getElementById('my-test');
    const onMouseEventObservable = fromEvent(additnEvent, 'mousemove');

    const subscription = onMouseEventObservable.subscribe(
      ( evt: MouseEvent ) => {
          this.fromEventLogs.push( `Checking: ${evt.clientX} X ${evt.clientY}`);

          if(evt.clientX > 250 && evt.clientY > 230 ){
            subscription.unsubscribe();
            this.fromEventLogs.push('Unsubsciption is done');
          }
      });

    /***** ajax *****/
    let todosurl = 'https://todos-api-dev.herokuapp.com/todos';
    const todoObservable = ajax(todosurl)

    todoObservable.subscribe(
     res =>{
       console.log(res.status, res.response);
       this.ajaxLogs.push('Response is coming');
     });

     /***** Interval *****/
     const secondsObservable = interval(1000);
     secondsObservable.subscribe(
       n => this.intervalLogs.push(`It been ${n} seconds since subscribing!`)
     );

      /***** FromArray *****/
    let number = [1, 2, 3, 4, 50]
     const arrayObervables = from(number);

     arrayObervables.subscribe(
       n => this.fromLogs.push(`${n}`)
     );

    /***** ofmethod *****/
      const ofObservable = of(22, 33, 44, 55, 66)
      ofObservable.subscribe(
        n => this.ofLogs.push(`${n}`)
      );
    
    /***** Custom observable with create method *****/

    let customObservable =  Observable.create( function (observer) {
      observer.next(10);
      observer.next(20);
      observer.next(30);
      observer.next(40);
      setTimeout(() => {
        observer.next(50);
        observer.complete();
      }, 1000);
      observer.next(60);
    });

    customObservable.subscribe({
      next: x => this.customObservableLogs.push('got value' + x),
      error: err => this.customObservableLogs.push('something wrong here: ' + err),
      complete: () => this.customObservableLogs.push('It is done'),
    });
     
    
     /***** Custom observalble with new keyword *****/
    let customObservable2 = new Observable(function (observer) {
      observer.next(11);
      observer.next(22);
      observer.next(33);
      setTimeout(() => {
        observer.next(44);
        observer.complete();
      }, 1000);
    });

    customObservable2.subscribe(
      x => this.customObservable2Logs.push('got value ' + x),
      err => this.customObservable2Logs.push('something wrong occurred: ' + err),
      () => this.customObservable2Logs.push('done'),
    ); // subscribe method with next, error, complete methods


      /***** Custom observalble with error method *****/

      let customObservable3 = new Observable( function (observer){
        try {
          observer.next(111);
          observer.next(222);
          observer.next(333);
          throw new Error ('Some Error')
        } catch(err){
          observer.error(err);
        }
      });
        customObservable3.subscribe(
          x => this.customObservable3Logs.push(' Got Value :' + x),
          err => this.customObservable3Logs.push('some thing wrong here: ' + err),
          () => this.customObservable3Logs.push('Completed'),
        );

        /***** Custom observalble with Array *****/

        let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         let arrayCustomObservable =  Observable.create( function (observer){
          arrayNumber.forEach( n => {
            observer.next(n)
          });
          observer.complete();
         });

         arrayCustomObservable.subscribe({
           next: x => this.arrayCustomObservableLogs.push('Got Value: ' + x),
           error: err => this.arrayCustomObservableLogs.push('something wrong :' + err),
           complete: () => this.arrayCustomObservableLogs.push( ' Done Array'),
         });


    } // ngOnInit ends
}
