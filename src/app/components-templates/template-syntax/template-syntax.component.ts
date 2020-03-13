import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

currentHero = {
  name:'World',
  power: 100000
}

formNotChanged = true;


heroImgUrl = './assets/images/hero.jpg';

saveable = true;
modified = false;
isspecial = false;

classConditions = {
  'savedata' : this.saveable,
  'modified' : !this.modified,
  'special' : this.isspecial
}

noOfColumns = 2

jesussave = "Jesus save me <script>('from evil')</script>";



  constructor() { }

  ngOnInit(): void {
  }

   getVal(){
     return 2;
   }
   getHeroImg(){
     return this.heroImgUrl
   }

updateHero(){
  this.currentHero = {
    name:"Raju Jeelaga",
    power:500
  };
}



}
