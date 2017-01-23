import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { headerAnimation } from '../../../assets/animations';


@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [headerAnimation('relative', '800ms')]

})
export class MenuComponent implements OnInit {
  public role;
  constructor(private actv: ActivatedRoute, private router: Router, private user: UserService) {
    this.actv.params.subscribe(param => {
      this.role = param['role'];
    });
  }
  ngOnInit() {
  }

  nav(target, title) {
    this.user.currentPage.next(title);
    this.router.navigate(['home',
      { outlets: { inside: `${target}` }}
    ]);
  }
}
