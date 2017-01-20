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
  public isHome: boolean;
  public minHeader: boolean = true;
  constructor(private user: UserService, private router: Router) {
    this.user.basics.then(basics => {
      this.isHome = true;
      this.name = basics.name;
      this.role = basics.role;
    });
  }

  ngOnInit() {
  }
}
