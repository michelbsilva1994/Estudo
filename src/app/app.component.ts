import { ChangeDetectionStrategy, Component, OnChanges, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariableComponent } from './components/template/template-variable/template-variable.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateBindingComponent, TemplateVariableComponent,
            TemplateControlFlowComponent,TemplateDeferrableViewsComponent,
            SignalsComponent,PaiOuMaeComponent, AngularPipesComponent,
            ReactiveFormsComponent, TemplateDrivenFormsComponent, ContentComponent, HostElementsComponent,
            LifeCycleComponent, ConsumeServiceComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges{
  title = 'angular-v17';

  constructor(){
    console.log(environment.env);
  }

  public number = signal(1);
  public boolean = true;

  ngOnChanges(): void {
    setInterval( () => {
      this.number.update((oldValue: any) => {
        return oldValue + 1;
      })
    }, 1000)
  }
}
