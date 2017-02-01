import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseAuth, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthService {
  public authState: FirebaseAuthState;
  //public role: string;
  

  constructor(public auth$: FirebaseAuth, public af: AngularFire) {
    this.auth$.subscribe((state: FirebaseAuthState) => {
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
    return this.auth$.createUser({
      email: input.email,
      password: input.password
    }).then(()=> this.list(`/users/`).push('')
        .ref.parent.set({
          name:input.names,
          role:"admin"
        }))
     // şimdilik sadece add user yapılıyor. Ama kayıtlar da afirebase e gidiyor.
  };
  list(string){
    return this.af.database.list(string);
  }




 // dilek(param) {
  //  console.log(param);
   // return param;
 // }
}
