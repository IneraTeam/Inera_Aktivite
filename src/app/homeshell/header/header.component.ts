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
  constructor(private user: UserService) {
    this.user.basics.then(info => {
      this.name = info.name;
    });
  }

  ngOnInit() {
    this.user.currentPage.subscribe(title => {
      this.pageTitle = title;
    });

    this.user.routerEvent.subscribe(url => {
      this.isHome = url.indexOf('menu') > -1 ? true : false;
    });
  }

  navigateBack() {
    this.user.navigateBack();
  }
}
