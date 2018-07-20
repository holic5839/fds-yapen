import { Component, OnInit } from '@angular/core';
import { AppRouterModule } from './yapen-route';

@Component({
  selector: 'app-yapen-header',
  template: `
  <input type="button" value="home" onclick="self.location='http://localhost:4200/#/main'">
  `,
  styles: []
})
export class YapenHeaderComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }

}
