import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css']
})
export class HeroBioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('name') serve;

  @Output('deleteRequest') deleteServeEvent = new EventEmitter();

  deleteServe(serve){
    this.deleteServeEvent.emit(serve);
  }
 

}
