// 노천명
import { Component, OnInit, Input } from '@angular/core';
import { Room } from './yapen-container.component';

@Component({
  selector: 'app-yapen-reserve',
  template: `
    <section class="reserve">
      <table class="reserve-table">
        <tr>
          <td>이름</td>
          <td>애월펜션</td>
        </tr>
        <tr>
          <td>가격</td>
          <td>256,000<span>원</span></td>
        </tr>
        <tr>
          <td>지역</td>
          <td>제주도</td>
        </tr>
      </table>
      <button type="submit" class="btn-reserve" (click)="moveToPayPage()">예약하기</button>
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

  moveToPayPage() {
    location.href = 'http://localhost:4200/#/pay';
  }

}
