// login.components.ts
/*    this.auth.login(value)
    .then(() => this.redirectHome());
    
    redirectHome() {
    this.router.navigate(['/home']);
  } 
*/

// auth.service.ts
/*
  get authenticated(): boolean{
    return this.authState !== null;
  }

  get id(): string{
    return this.authenticated ? this.authState.uid : '';
  }

  login(input): firebase.Promise<FirebaseAuthState>{
    return this.auth.login(input)
    .catch(err => console.log('AuthService#login :', err));
  }

  logout() {
    this.auth.logout();
  }
*/