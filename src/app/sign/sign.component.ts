import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  signIn(formvalue): void {
    this.user.createUser(formvalue);
  }
}
