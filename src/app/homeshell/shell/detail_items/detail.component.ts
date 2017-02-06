import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})

export class DetailComponent {
    constructor() {
        console.log('called');
    }
}
