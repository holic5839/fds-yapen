// Jang geunho
import { Component, OnInit, Input } from '@angular/core';
import { Room } from './yapen-container.component';

@Component({
  selector: 'app-yapen-list',
  template: `
  <ul>
    <li *ngFor="let room of rooms">
      이름 : {{ room.roomName }} 가격 : {{ room.roomFee }} 지역 : {{ room.roomRegion }}
    </li>
  </ul>
  <button class="btn" type="submit" value="list" onclick="">상세 정보 보기</button>
  `,
  styles: []
})
export class YapenListComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

}
