import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hshell',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HShellComponent implements OnInit {
  constructor(private user: UserService) {
    this.user.routerEvent.subscribe(url => {
      if (url.indexOf('inside') === -1) {
        this.user.navInChild();
      }
    });
  }

  ngOnInit() {
  }

}
