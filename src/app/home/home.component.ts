import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name: string;
  public role: string;
  constructor(private user: UserService) {
    this.user.basics.then( basics => {
      this.name = basics.name;
      this.role = basics.role;
    });
  }

  ngOnInit() {
  }
}
