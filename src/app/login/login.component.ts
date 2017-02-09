import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = false;
  constructor(private user: UserService) {
  }

  ngOnInit() {
  }

  submitForm(value) {
    this.user.login(value)
      .then(() => {
        this.user.basics.then(basics => {
          this.user.setLocalInfo(basics['name'], basics['role'])
            .then(() => this.user.navInChild());
        });
      })
      .catch((err) => {
        // non user || pre user
        this.user.checkIfPreUser(value.email).take(1).subscribe(data => {
          if (data.length !== 0) {
            // pre user
            this.user.navParentRoute('/sign/', { queryParams: { mail: value.email, key: data[0].$key } });
          } else {
            // non user
            console.log('Error@LoginComponent.ts :', err);
          }
        });
      });
  }

  redirectSignIn() {
    this.user.navParentRoute('/sign/');
  }
}
