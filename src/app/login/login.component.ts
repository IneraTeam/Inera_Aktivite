import { IsauthService } from './../services/isauth/isauth.service';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public error:boolean = false;
    public error_message:string;

  constructor(private user: UserService , private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(value) {
    this.user.logIn(value)
    .catch((err)=>{
      this.error=true;
      setTimeout(() => {this.error=false;
        },2500);
        console.log('Error@LoginComponent.ts | submitForm', err);
        this.error_message = err.message;
    })// login olma kısmı. sayfa yönlendirme kısmı user serviste hata mesajı burada yapılıyor.
  
  }
  navigateToSign(){
    this.router.navigate(['/sign'])
  }

 
}
