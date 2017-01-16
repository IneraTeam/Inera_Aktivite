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
      this.name = basics.name;
      this.role = basics.role;
    }).then(() => this.routeMenu());

    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        this.isHome = false;
        setTimeout(() => {
          if (this.isHomePage(routerEvent.url)) { this.isHome = true; }
          this.minHeader = !this.minHeader;
        }, 200);
      }
    });
  }

  ngOnInit() {
  }

  routeMenu() {
    this.router.navigate(['home', {
      outlets: { inside: `menu/${this.role}` }
    }]);
  }

  isHomePage(url$): boolean {
    return url$.indexOf('admin') > -1 ? true : false;
  }
}
