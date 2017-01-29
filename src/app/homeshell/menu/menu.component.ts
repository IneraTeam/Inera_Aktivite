import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public role;
  constructor(private actv: ActivatedRoute, private user: UserService) {
    this.actv.params.subscribe(param => {
      this.role = param['role'];
    });
  }
  ngOnInit() {
  }
}
