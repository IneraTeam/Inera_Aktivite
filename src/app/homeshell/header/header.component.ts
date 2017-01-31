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
  public pagetitle: string;
  public name: string;
  constructor(private user: UserService) {
    this.name = this.user.name;
  }
  ngOnInit() {
  }

  navigateBack() {
    this.user.navigateBack();
  }
}
