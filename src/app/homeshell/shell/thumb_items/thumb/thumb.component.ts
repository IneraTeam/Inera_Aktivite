import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './thumb.html',
  styleUrls: ['./thumb.css']
})
// tslint:disable-next-line:component-class-suffix
export class ThumbClient {
  @Input() item;
  @Input() target;
}

// ThumbProject, ThumbUsers sonra
