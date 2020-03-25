import { Component, OnInit } from '@angular/core';

import { CountingServiceService } from '../counting-service.service';
@Component({
  selector: 'app-increase-count',
  templateUrl: './increase-count.component.html',
  styleUrls: ['./increase-count.component.css']
})
export class IncreaseCountComponent implements OnInit {

  constructor( private countingService: CountingServiceService) { }

  ngOnInit(): void {
  }

  addOne(){
    this.countingService.increment();
  }

}
