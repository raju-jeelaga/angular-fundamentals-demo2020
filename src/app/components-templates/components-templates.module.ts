import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightV1Directive } from './attribute-directives/highlight-v1.directive';
import { HighlightV2Directive } from './attribute-directives/highlight-v2.directive';
import { HighlightV3Directive } from './attribute-directives/highlight-v3.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { CountdownParentWithTempRefVarComponent } from './countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ViaSerComponent } from './via-ser/via-ser.component';
import { ViaTodoComponent } from './via-todo/via-todo.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { FlyingHerosPurePipe } from './pipes/flying-heros-pure.pipe';
import { FlyingHerosImpurePipe } from './pipes/flying-heros-impure.pipe';



@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInTemplateUrlComponent, TemplateSyntaxComponent, HeroDetailsComponent, CustomEventsComponent, DisplayHeroComponent, HeroBioComponent, TwoWayBindingComponent, HighlightDirective, DirectivesComponent, HighlightV1Directive, HighlightV2Directive, HighlightV3Directive, InteractionComponent, CountdownParentWithTempRefVarComponent, CountdownTimerComponent, SimpleTodoComponent, TodoDetailComponent, ViaSerComponent, ViaTodoComponent, PipesComponent, ExponentialStrengthPipe, FormatNamePipe, FlyingHerosPurePipe, FlyingHerosImpurePipe],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsTemplatesModule { }
