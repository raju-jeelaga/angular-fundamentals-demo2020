import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsTemplatesModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RxDemoModule,
    ModulesDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
