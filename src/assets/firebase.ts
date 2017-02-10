import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyAd7cUm4qlXG1Q2xDV-rTiHSgluz6Ol0hA",
    authDomain: "inera1-e7f24.firebaseapp.com",
    databaseURL: "https://inera1-e7f24.firebaseio.com",
    storageBucket: "inera1-e7f24.appspot.com",
    messagingSenderId: "510388167767"
  };

  const authConfig = {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    } 

  export const firebaseInit = AngularFireModule.initializeApp(firebaseConfig, authConfig);