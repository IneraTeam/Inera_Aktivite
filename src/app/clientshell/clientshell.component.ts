import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { headerAnimation } from '../../assets/animations';

@Component({
  template: `
    <app-client [@slideUpDown]> "client" </app-client>
  `,
  styles: [],
  animations: [headerAnimation('700ms')]
})
export class CShellComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
