// 노천명
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-pay',
  template: `

  <section class="pay">
    <label><input type="radio" checked>무통장 입금</label>
    <form action="">
      <ul>
        <li>입금은행:
          <select name="" id="">
            <option value="">기업은행</option>
            <option value="">국민은행</option>
            <option value="">우리은행</option>
            <option value="">하나은행</option>
            <option value="">광주은행</option>
          </select>
        </li>
        <li>입금자명: <input type="text" name="userName" [(ngModel)]="name">
        </li>
      </ul>
    </form>
    <button type="submit" class="btn-pay" (click)="moveToFinishPage()">결제하기</button>
  </section>
  `,
  styles: [`
  .pay{
    position: absolute;
    top: 30%;
    left: 40%;
    border: 1px solid #aaa;
    background-color: #ccc;
  }
  `]
})
export class YapenPayComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }

  moveToFinishPage() {
    console.log('finish');
    !this.name ? alert('입금자명을 입력하세요.')
    : location.href = 'http://localhost:4200/#/payfinish';
  }

}
