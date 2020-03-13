import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './components-templates/display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';

const routes: Routes = [
  { path:'index', component:IndexComponent },
  { path: 'components-templates/display-data-in-template', component:DisplayDataInTemplateComponent },
  { path: 'components-templates/display-data-in-template-url', component:DisplayDataInTemplateUrlComponent},
  { path: 'components-templates/template-syntax', component:TemplateSyntaxComponent},
  { path: '', redirectTo: 'index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
