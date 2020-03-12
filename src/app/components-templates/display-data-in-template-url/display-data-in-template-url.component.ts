import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template-url',
  templateUrl: './display-data-in-template-url.component.html',
  styleUrls: ['./display-data-in-template-url.component.css']
})
export class DisplayDataInTemplateUrlComponent implements OnInit {
 
 private title: string;
    myhero : string;
    heros: string[] = ["Jesus", "world", "sun", "earth"]
  constructor() { 
    this.title = "Who will save your life";
    this.myhero = "Jesus";
    let age= 33
  }


  ngOnInit(): void {
  }

}
