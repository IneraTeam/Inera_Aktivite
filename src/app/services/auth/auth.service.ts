import { IUserModel, UserModel } from './../../models/model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseAuth, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';



@Injectable()
export class AuthService {
  public authState: FirebaseAuthState;
  public role: string;

  private tasks$: FirebaseListObservable<IUserModel[]>;

  constructor(public auth: FirebaseAuth, private _af: AngularFire) {

    this.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      const path = `/users/${state.uid}`;
      //     _af.database.list(path).push(new UserModel({names: 'string' , email: 'selam' , password: 'sfwkgşkr'}));
      this.tasks$ = _af.database.list(path);
    });

  }

  //kullanıcı daha önceden sisteme kayıt olmuş mu bilgisini boolean olarak döndürür.
  /*get authenticated(): boolean {
     return this.authState !== null;
   }
 
   get id() {
     return this.authenticated ? this.authState.uid : '';// '' nedemek?varsa id döndür yoksa boş döndür.
   }*/



  //addUser(input): firebase.Promise<FirebaseAuthState> {
  //return this.tasks$.push(new UserModel(input));
  // };//adduser 



  addUser(input): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser({
      email: input.email,
      password: input.password
    })// şimdilik sadece add user yapılıyor. Ama kayıtlar da afirebase e gidiyor.
      .then(() => {
        console.log(input);
        return this.tasks$.push(new UserModel(input));


      });//then

  };//adduser 

  readFromDatabase(input): firebase.Promise<FirebaseAuthState> {

return this.tasks$.

  }






  /*authdeneme(input):firebase.Promise<any> {
  return this.tasks$.push( new UserModel(input));
  }*/


}//export class




/*@Injectable()
export class AuthService {
  public authState: FirebaseAuthState;
  public role: string;
  constructor(public auth: FirebaseAuth, private _af: AngularFire) {
    this.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

//kullanıcı daha önceden sisteme kayıt olmuş mu bilgisini boolean olarak döndürür.
get authenticated(): boolean {
  return this.authState !== null;
}

get id() {
return this.authenticated ? this.authState.uid: '';// '' nedemek?varsa id döndür yoksa boş döndür.
}



  addUser(input): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser({
      email: input.email,
      password: input.password
    })// şimdilik sadece add user yapılıyor. Ama kayıtlar da afirebase e gidiyor.
  };




 // dilek(param) {
  //  console.log(param);
   // return param;
 // }
}*/
