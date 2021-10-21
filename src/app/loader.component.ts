import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: `<div> {{message}} </div>`,
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() message?: string;

  ngOnInit(): void {
    console.log('loader.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('loader.ngOnDestroy()');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
