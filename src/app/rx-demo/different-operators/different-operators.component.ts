import { Component, OnInit } from '@angular/core';
import { of, fromEvent, interval, Observable } from 'rxjs';
import {  map, 
  filter, 
  combineLatest, 
  concat, 
  merge, 
  startWith,
  withLatestFrom, 
  zip, 
  take, 
  debounceTime,
  distinct,
  distinctUntilChanged,
  takeUntil,
  bufferTime,
  tap,
  catchError,
  retry
} from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-different-operators',
  templateUrl: './different-operators.component.html',
  styleUrls: ['./different-operators.component.css']
})
export class DifferentOperatorsComponent implements OnInit {
 
  numbersMappedLogs: Array<number> = [];
  numberFilterLogs: Array<number> = []; 
  combineFilterLogs: Array<string> = [];
  mergedNumberLogs: Array<number> = [];
  conactNumsLogs: Array<number> = [];
  startedWithLogs: Array<number> = [];
  withLatsFromsLogs: Array<string> = [];
  zipLogs: Array<Array<number>> = [];
  debounceTimeLogs: Array<string> = [];

  constructor() { }

  ngOnInit(): void {

    let numberObservable = of(1, 2, 3, 4, 5);

      /******* map operator *********/
    let numberMap = numberObservable.pipe(
      map( val => val * 10)
    );

    numberMap.subscribe(val => this.numbersMappedLogs.push(val));

    /******* filter operator *********/
    let numberFilter = numberObservable.pipe(
      filter(value => value % 2 == 0)
    )
    numberFilter.subscribe( value => this.numberFilterLogs.push(value));

    /******* combineLatest operator *********/
    let observable1$ = interval(1000);
    let Observable2$ = interval(1500);

    let combined$ = observable1$.pipe(
        combineLatest(
          Observable2$,
          ( val1, val2) => {
            return ( `${val1} - ${val2}`);
          }
        )
    );
     
    combined$.subscribe(val => this.combineFilterLogs.push(val));

     /******* Merged operator *********/
      let merged$ = observable1$.pipe(
        merge(Observable2$)
      );
 
      merged$.subscribe( val => this.mergedNumberLogs.push(val));

      /******* concat operator *********/

      let nums1$ = of(1, 2, 3);
      let nums2$ = of(4, 5, 6);

      let conctaNums$ = nums1$.pipe(
        concat(nums2$)
      )

      conctaNums$.subscribe( val => this.conactNumsLogs.push(val));

      /******* startWith operator *********/

      let numstart$ = of(2,3,4,5)

      let startedWith$ = numstart$.pipe(
        startWith(0)
      );

      startedWith$.subscribe( val => this.startedWithLogs.push(val));

      /******* withLatestFrom operator *********/ 
      const source = interval(5000);

      const secondSource = interval(1000);

      const final = source.pipe(
        withLatestFrom(secondSource),
        map(([first, second]) => {
         return `First Source of 5s: ${first} Second source of 1s ${second}`;
        })
      );
       
      final.subscribe( val => this.withLatsFromsLogs.push(val));

      /******* zip operator *********/

      const numbers1$ = interval(1000);
      const numbers2$ = numbers1$.pipe(take(2));

      const num$ = numbers1$.pipe(
        zip(numbers2$)
      )
      num$.subscribe(val => this.zipLogs.push(val));

       /******* debounceTime operator *********/
       const innerElem: HTMLInputElement = <HTMLInputElement>document.getElementById('name');

       const events$ = fromEvent(innerElem, 'keyup').pipe(
         debounceTime(500)
       )

       events$.subscribe(events => this.debounceTimeLogs.push(innerElem.value));

  } //ngOnInit

}
