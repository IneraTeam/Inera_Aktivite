import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-client> "client" </app-client>
  `,
  styles: [],
//  animations: [headerAnimation('700ms')]
})
export class CShellComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
