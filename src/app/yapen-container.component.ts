// ***** 수정 금지 ***** //

import { Component, OnInit } from '@angular/core';

export interface Room {
  id: number;
  roomName: string;
  roomRegion: string;
  roomSize: number;
  roomMaxMember: number;
  roomFee: number;
}
@Component({
  selector: 'app-yapen-container',
  template: `
  <app-yapen-header></app-yapen-header>
  <app-yapen-searchbar></app-yapen-searchbar>
  <app-yapen-list></app-yapen-list>
  <app-yapen-reserve></app-yapen-reserve>
  <app-yapen-pay></app-yapen-pay>
`,
  styles: []
})

// ***** 수정 금지 ***** //

export class YapenContainerComponent implements OnInit {
  rooms: Room[];

  constructor() { }

  ngOnInit() {
    this.rooms = [
      {id: 1, roomName: '애월펜션', roomRegion: '제주도', roomSize: 62, roomMaxMember: 4, roomFee: 256000}
    ];
  }

}

// ***** 수정 금지 ***** //
