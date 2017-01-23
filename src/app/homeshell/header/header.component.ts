import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { headerAnimation } from '../../../assets/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerAnimation('absolute')]
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  @Input() role: string;
  public isHome: boolean;
  public pageTitle: string;
  public minHeader: boolean = true;
  constructor(private router: Router, private user: UserService) {
    this.user.currentPage.subscribe(title => {
      this.pageTitle = title;
    });
  }

  ngOnInit() {
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

  isHomePage(url$): boolean {
    return url$.indexOf('menu') > -1 ? true : false;
  }

  navigateBack() {
    this.user.navigateBack();
  }
}
