// Jang Geunho
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-searchbar',
  template: `
    <input type="search" id="search-keyword" autofocus placeholder="지역을 입력하세요."
      [(ngModel)]="content"
      (keyup.enter)="keyupHandler($event.target.value)">
  `,
  styles: [
    `input {
    display: block;
    border: 5px solid #9999FF;
    border-radius: 10px;
    font-size: 100%;
    margin: 150px auto;
    width: 600px;
    height: 60px;

  }`]
})

export class YapenSearchbarComponent implements OnInit {
  content = '';

  keyupHandler(content) {
    if ( !content ) { return; }
    this.content = '';
    location.href = 'http://localhost:4200/#/list';
}

  ngOnInit() {}
}
