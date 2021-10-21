import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
} from '@angular/core';

import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <button (click)="createComponent('dynamicHost')">Create</button>
      <button (click)="createComponent('dynamicHost2')">Create2</button>
      <button (click)="removeComponent('dynamicHost')">Destroy latest</button>
      <button (click)="removeComponent('dynamicHost2')">Destroy2 latest</button>
      <ng-template adHost>Fixed host</ng-template>
      <div style="border:1px solid red" id='dynamicHost'>Dynamic host</div>
      <div style="border:1px solid blue" id='dynamicHost2'>Dynamic host 2</div>
    </div>
  `,
})
export class AdBannerComponent {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  private componentRefs: any = {};

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {}

  createComponent(host: string) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(HeroJobAdComponent);

    const hostElem = document
      .getElementById(host)
      ?.appendChild(document.createElement('div'));

    this.componentRefs[host] = componentFactory.create(
      this.injector,
      [],
      hostElem
    );

    this.componentRefs[host].instance.data = { myinput: Math.random() };

    this.app.attachView(this.componentRefs[host].hostView);
  }

  removeComponent(host: string) {
    if (this.componentRefs[host]) {
      console.log('detach me!');
      this.app.detachView(this.componentRefs[host].hostView);
      this.componentRefs[host].destroy();
      delete this.componentRefs[host];
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
