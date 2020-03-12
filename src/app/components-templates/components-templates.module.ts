import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';



@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInTemplateUrlComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsTemplatesModule { }
