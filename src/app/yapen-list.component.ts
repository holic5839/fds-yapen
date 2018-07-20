// Jang geunho
import { Component, OnInit, Input } from '@angular/core';
import { Room } from './yapen-container.component';

@Component({
  selector: 'app-yapen-list',
  template: `
    <ul>
      <li>이름 : 애월펜션</li>
      <li>가격 : 256,000</li>
      <li>지역 : 제주도</li>
    </ul>
  <button class="btn" type="submit" value="list" (click)="moveToReservePage()">상세 정보 보기</button>
  `,
  styles: []
})
export class YapenListComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

  moveToReservePage() {
    location.href = 'http://localhost:4200/#/reserve';
  }

}
