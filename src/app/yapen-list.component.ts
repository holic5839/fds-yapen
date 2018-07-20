// Jang geunho
import { Component, OnInit, Input } from '@angular/core';
import { Room } from './yapen-container.component';

@Component({
  selector: 'app-yapen-list',
  template: `
   <ul *ngFor="let room of rooms">
     <li> 이름 : {{ room.roomName }} </li>
     <li> 가격 : {{ room.roomFee }} </li>
     <li> 지역 : {{ room.roomRegion }} </li>
   </ul>
  `,
  styles: []
})
export class YapenListComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

}
