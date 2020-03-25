import { Component, OnInit } from '@angular/core';

import { CountingServiceService } from '../counting-service.service';
@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.css']
})
export class DisplayCountComponent implements OnInit {

  count:number;  
   
  constructor( private countingService: CountingServiceService) { }

  ngOnInit(): void {
    this.countingService.counter$.subscribe(val => this.count = val)
  }

}
