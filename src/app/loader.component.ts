import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: `<div> {{message}} </div>
  `,
})
export class LoaderComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('loader.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('loader.ngOnDestroy()');
  }

  @Input() message?: string;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
