import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { headerAnimation } from '../../../assets/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [ headerAnimation()]
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  @Input() role: string;
  public isHome: boolean;
  public minHeader: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        this.isHome = false;
        setTimeout(() => {
          if (this.isHomePage(routerEvent.url)) { this.isHome = true; }
          this.minHeader = !this.minHeader;
        }, 300);
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
    return url$.indexOf('menu') > -1 ? true : false;
  }
}
