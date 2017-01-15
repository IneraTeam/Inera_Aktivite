import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

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
    });
  }

  ngOnInit() {
    this.routeMenu();
  }

  routeMenu() {
    this.router.navigate(['home', { outlets: { inside: 'menu' } }]);
  }
}
