import { Component, OnInit } from '@angular/core';

import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner></app-ad-banner>
    </div>
  `,
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];

  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
