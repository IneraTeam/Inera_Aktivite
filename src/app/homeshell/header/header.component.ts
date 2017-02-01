import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isHome: boolean;
  public pagetitle: string;
  public name: string;
  public image: string;
  constructor(private user: UserService) {
    this.name = this.user.name;
    this.user.pagetitle.subscribe( title => {
      this.isHome = !title ? true : false;
      this.pagetitle = title || '';
    });
  }
  ngOnInit() {
  }

  navigateBack() {
    this.user.navigateBack();
  }
}
