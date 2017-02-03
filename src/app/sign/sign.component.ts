import { IsauthService } from './../services/isauth/isauth.service';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public error:boolean = false;
  public error_message:string;

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  signIn(formvalue): void {
    this.user.createUser(formvalue)
      .then(() => this.router.navigate(['/home']))
      .catch((err) => {

        this.error = true;//girilen mail adresi, vt da var ise, ekranda uyarı verilir.
        setTimeout(() => {this.error=false;
        },2500);
        console.log('Error@SignComponent.ts | signIn', err);
        this.error_message = err.message;
      });
  }
}
