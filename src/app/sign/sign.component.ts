import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  signIn(formvalue): void {
    this.user.createUser(formvalue)
      .then(() => this.router.navigate(['/home']))
      .catch((err) => {
        console.log('Error@SignComponent.ts | signIn', err);//erroru sor.

      });
  }
}
