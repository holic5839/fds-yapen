// Jang Geunho
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-yapen-searchbar',
  template: `
    <input type="search" id="search-keyword" autofocus placeholder="지역을 입력하세요."
       (keyup.enter)="keyupHandler()">
      <a routerLink="./list"></a>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class YapenSearchbarComponent implements OnInit {
  content = '';
  // @Output() keyuphandler = new EventEmitter<string>();
  ngOnInit() {
  }

  keyupHandler() {
    if ( !this.content ) { return alert('검색어를 입력하세요.'); }
    // this.searchDo.emit(this.content);
    this.content = '';
    // console.log('zz');
  }
}
