import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isHome: boolean = true;
  public pageTitle: string;
  public name: string;
  public minHeader: boolean = false;
  constructor(private user: UserService) {
    this.user.currentPage.subscribe(title => {
      this.pageTitle = title;
    });
    this.user.basics.then(info => {
      this.name = info.name;
    });
    this.user.routerEvent.subscribe(url => {
      this.isHome = !this.isMenu(url) ? false : true;
    });
  }

  private isMenu(url: string): boolean {
    return url.indexOf('menu') > -1 ? true : false;
  }

  ngOnInit() {
  }

  navigateBack() {
    this.user.navigateBack();
  }
}
