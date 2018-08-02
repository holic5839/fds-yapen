import { Component, OnInit } from '@angular/core';
import { AppRouterModule } from './yapen-route';

@Component({
  selector: 'app-yapen-header',
  template: `
  <input type="button" value="home" onclick="self.location='../main'">
  `,
  styles: []
})
export class YapenHeaderComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }

}
