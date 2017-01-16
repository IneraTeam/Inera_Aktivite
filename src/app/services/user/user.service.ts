import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userID: string;
  private userPath: string = '/users/';

  constructor(private _auth: AuthService) {
    this.userID = this._auth.id;
   }


   createUser(input) {
     return this._auth.addUser(input);
   }

}
