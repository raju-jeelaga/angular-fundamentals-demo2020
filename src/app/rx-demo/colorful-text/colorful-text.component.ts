import { Component, OnInit } from '@angular/core';
import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-colorful-text',
  templateUrl: './colorful-text.component.html',
  styleUrls: ['./colorful-text.component.css']
})
export class ColorfulTextComponent implements OnInit {

  color : string = 'blue';

  constructor( private colorchangeServices: ColorChangeService ){ }

  ngOnInit() {
    this.colorchangeServices.color$.subscribe(
      color => this.color = color
    );
  }

}
