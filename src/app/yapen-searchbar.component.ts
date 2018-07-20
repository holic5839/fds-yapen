// Jang Geunho
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-searchbar',
  template: `
    <input type="search" id="search-keyword" autofocus placeholder="지역을 입력하세요."
      [(ngModel)]="content"
      (keyup.enter)="keyupHandler($event.target.value)">
  `,
  styles: []
})

export class YapenSearchbarComponent implements OnInit {
  content = '';

  keyupHandler(content) {
    if ( !content ) { alert('검색어를 입력하세요.'); }
    this.content = '';
    location.href = 'http://localhost:4200/#/list';
  }

  ngOnInit() {}
}
