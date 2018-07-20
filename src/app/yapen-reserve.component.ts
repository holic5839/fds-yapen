// 노천명
import { Component, OnInit, Input } from '@angular/core';
import { Room } from './yapen-container.component';

@Component({
  selector: 'app-yapen-reserve',
  template: `
    <!-- *ngFor="let room of rooms" -->
    <table *ngFor="let room of rooms">
      <tr>
        <td>펜션명</td>
        <td>{{ room.roomName }}</td>
      </tr>
      <tr>
        <td>지역</td>
        <td>{{ room.roomRegion }}</td>
      </tr>
      <tr>
        <td>크기</td>
        <td>{{ room.roomSize }} <span>평</span></td>
      </tr>
      <tr>
        <td>요금</td>
        <td>{{ room.roomFee }} <span>원</span></td>
      </tr>
    </table>

    <button type="submit">예약하기</button>
  `,
  styles: []
})
export class YapenReserveComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

}
