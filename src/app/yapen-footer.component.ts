import { Component, OnInit } from '@angular/core';
import { AppRouterModule } from './yapen-route';

@Component({
  selector: 'app-yapen-footer',
  template: `
  <p> this is footer </p>
  `,
  styles: []
})
export class YapenFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
