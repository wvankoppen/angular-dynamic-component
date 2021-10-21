import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: `<div>
   my template! My input data: {{data|json}}
   <span *ngFor="let i of arr">{{i}}</span>
   </div>
  `,
})
export class HeroJobAdComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('init!');
  }

  ngOnDestroy(): void {
    console.log('destroy!');
  }
  @Input() data: any;
  arr = [0, 1, 2];
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
