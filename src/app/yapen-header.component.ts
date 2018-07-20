import { Component, OnInit } from '@angular/core';
import { AppRouterModule } from './yapen-route';

@Component({
  selector: 'app-yapen-header',
  template: `
  <input type="button" value="page" onclick="self.location='http://localhost:4200/#/footer'">
  `,
  styles: []
})
export class YapenHeaderComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }

}
