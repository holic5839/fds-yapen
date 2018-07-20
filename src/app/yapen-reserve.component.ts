// 노천명
import { Component, OnInit, Input } from '@angular/core';
import { Room } from './yapen-container.component';

@Component({
  selector: 'app-yapen-reserve',
  template: `
    <!-- *ngFor="let room of rooms" -->
    <section class="reserve">
      <table class="reserve-table" *ngFor="let room of rooms">
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
      <button type="submit" class="btn-reserve">예약하기</button>
    </section>

  `,
  styles: [`
    .reserve{
      position: absolute;
      top: 30%;
      left: 40%;
    }
    .reserve-table{
      border: 1px solid #aaa;
      background-color: #ccc;
      width: 300px;
    }
    td{
      border: 1px solid #aaa;
    }
    .btn-reserve{
      background-color: green;
      background: #ff6559;
      color: #fff;
      padding: 10px 100px;
      font-weight: bold;
      font-size: 14px;
      border-radius: 3px;
      margin-top: 10px;
      margin-left: 20px;
    }
  `]
})
export class YapenReserveComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

}
