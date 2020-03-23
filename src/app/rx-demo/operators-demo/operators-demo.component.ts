import { Component, OnInit } from '@angular/core';
import {of, pipe} from 'rxjs';
import { filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-operators-demo',
  templateUrl: './operators-demo.component.html',
  styleUrls: ['./operators-demo.component.css']
})
export class OperatorsDemoComponent implements OnInit {

    oddSquareLogs1: Array<number> = [];
    oddSquareLogs2: Array<number> = [];
    oddSquareLogs3: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    // Created observable using of method
    let numberObsaervable = of(1, 2, 3, 4, 5, 6, 7);

    /********* Applying map and filter operators ***********/
    let oddFilterFunc = filter((val:number) => val%2 !==0);
    let oddFiltered$ = oddFilterFunc(numberObsaervable);
    
    //oddFiltered$.subscribe(value => console.log('filter output', value));

    let squareMapFunc = map((val:number) => val *val );
    let oddSquaredNumbers$ = squareMapFunc(oddFiltered$);
    
    oddSquaredNumbers$.subscribe(value => this.oddSquareLogs1.push(value));

    /*********** Applying map and filter operators through pipe() **************/
    let squareOddPipeFunc = pipe(
      filter((n: number) => n % 2 !==0 ),
      map(n => n * n)
    );

    let squareOdd$ = squareOddPipeFunc(numberObsaervable);
    squareOdd$.subscribe(x=> this.oddSquareLogs2.push(x));

    /******** Applying pipe() on observable ***********/
    let squareOddObservable = numberObsaervable.pipe(
      filter((n: number) => n % 2 !==0),
      map(n => n * n)
    );

    squareOddObservable.subscribe(x => this.oddSquareLogs3.push(x));



  } //ngOnInit

}
