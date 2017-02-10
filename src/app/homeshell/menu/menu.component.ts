import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { headerAnimation } from '../../../assets/animations';


@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
//  animations: [headerAnimation('relative', '500ms')]

})
export class MenuComponent implements OnInit {
  public role;
  constructor(private user: UserService) {
    this.role = user.role;
  }
  ngOnInit() {
  }
}
