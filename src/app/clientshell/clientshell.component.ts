import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    "client"
  `,
  styles: []
})
export class CShellComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

}
