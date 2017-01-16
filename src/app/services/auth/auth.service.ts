import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthService {
  public authState: FirebaseAuthState;
  public role: string;
  constructor(public auth: FirebaseAuth) {
    this.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

//kullanıcı daha önceden sisteme kayıt olmuş mu bilgisini boolean olarak döndürür.
get authenticated(): boolean {
  return this.authState !== null;
}

get id() {
return this.authenticated ? this.authState.uid: '';// '' nedemek?
}



  addUser(input): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser({
      email: input.email,
      password: input.password
    })// şimdilik sadece add user yapılıyor. Ama kayıtlar firebase e atılmıyor.
  };




 // dilek(param) {
  //  console.log(param);
   // return param;
 // }
}
