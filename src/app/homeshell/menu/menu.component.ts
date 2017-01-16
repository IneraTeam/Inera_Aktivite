import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public role;
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.role = param['role'];
    });
  }
  ngOnInit() {
  }
}
