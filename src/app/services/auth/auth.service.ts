import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, AngularFireAuth } from 'angularfire2';

import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;
  constructor(public auth: AngularFireAuth, public af: AngularFire) {
    auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id() {
    return this.authenticated ? this.authState.uid : '';
  }

  get mappedId() {
    return this.auth.map(auth => auth.uid);
  }

  list(path: string, preserveSnapShot?: boolean) {
    return this.af.database.list(`${path}`, { preserveSnapshot: preserveSnapShot });
  }

  login(input): firebase.Promise<FirebaseAuthState> {
    return this.auth.login(input);
  }

  addUser(input): firebase.Promise<FirebaseAuthState> {
    return firebase.auth().createUserWithEmailAndPassword(
      input.email, input.password
    ).then((signed) => {
      return this.list(`/users/${signed.uid}`).push('')
        .ref.parent.set({
          name: input.names,
          role: input.role
        });
    });
  }
}
