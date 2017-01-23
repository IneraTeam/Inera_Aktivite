import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-hshell',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HShellComponent implements OnInit {
  public name: string;
  public role: string;
  constructor(private user: UserService, private router: Router) {
    this.user.basics.then(basics => {
      this.name = basics.name;
      this.role = basics.role;
    }); // .then(() => this.user.navigateURL());
  }

  ngOnInit() {
  }

}
