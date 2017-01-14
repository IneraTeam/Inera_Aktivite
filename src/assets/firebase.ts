import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
export const firebaseConfig = {
    apiKey: 'AIzaSyAb2zS6ynvhEHpB0W6FiMAuLk20qViwDzY',
    authDomain: 'batu-36a5b.firebaseapp.com',
    databaseURL: 'https://batu-36a5b.firebaseio.com',
    storageBucket: 'batu-36a5b.appspot.com',
    messagingSenderId: '47639400089'
  };

  const authConfig = {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    } 

  export const firebaseInit = AngularFireModule.initializeApp(firebaseConfig, authConfig);