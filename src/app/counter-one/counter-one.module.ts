import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CountingServiceService } from './counting-service.service';

import { CounterHomeComponent } from './counter-home/counter-home.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { IncreaseCountComponent } from './increase-count/increase-count.component';



@NgModule({
  declarations: [CounterHomeComponent, DisplayCountComponent, IncreaseCountComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DisplayCountComponent, IncreaseCountComponent],
  providers:[CountingServiceService]
})
export class CounterOneModule { }
