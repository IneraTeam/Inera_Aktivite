import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: boolean = false;
  constructor(private user: UserService) {
  }

  ngOnInit() {
  }

  submitForm(value) {
    this.user.login(value);
  }

  redirectSignIn() {
    this.user.navParentRoute('/sign/');
  }
}
