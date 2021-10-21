import {
  Component,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  ComponentFactory,
} from '@angular/core';

import { LoaderComponent } from './loader.component';

@Component({
  selector: 'app-demo',
  template: `
      <button (click)="toggleLoader('body')">Toggle loader on body</button>
      <button (click)="toggleLoader('content')">Toggle loader on content</button>
      <div class="content" style="border:1px solid red" id='dynamicHost'>Content</div>
  `,
})
export class DemoComponent {
  private loaders: any = {};
  componentFactory: ComponentFactory<LoaderComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {
    this.componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
  }

  toggleLoader(className: string) {
    if (this.loaders[className]) {
      this.app.detachView(this.loaders[className].hostView);
      this.loaders[className].destroy();
      delete this.loaders[className];
    } else {
      const hostElem = document
        .getElementsByClassName(className)[0]
        ?.appendChild(document.createElement('div'));

      this.loaders[className] = this.componentFactory.create(
        this.injector,
        [],
        hostElem
      );

      this.loaders[className].instance.message = 'loading...';

      this.app.attachView(this.loaders[className].hostView);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
