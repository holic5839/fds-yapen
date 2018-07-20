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
