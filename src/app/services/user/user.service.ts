import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private userID: string;
  private userPath: string = '/users/';


  constructor(private _auth: AuthService , public router: Router) {
 // this.userID = this._auth.;
   }

   db(input: string){
return this._auth.list(input);
   }

   get info(){
     return this.db(`/users/${this._auth.id}`).$ref.once('value');
   }


   createUser(input) {
     return this._auth.addUser(input);
   }
   logIn(value){
     return this._auth.login(value)
     .then(() => this.router.navigate(['/home']))// doğru giriş yaparsa home a yönlendiriyor.
   }
}
