/* tslint:disable:no-string-literal */

export interface IUserModel {
  $key?: string;
  username: string;
  email:string;
  password:string;
}

export class UserModel implements IUserModel {
  username: string;
  email:string;
  password:string;


  constructor(input ){
this.username  = input.names;
this.email = input.email;
this.password = input.password;
  }
}

/*export interface IUserModel {
  $key?: string;
  username: string;
}

export class UserModel implements IUserModel {
  username: string;


  constructor(input: string ){
this.username  = 'dilek';
  }
}*/


 /* constructor(input: {username: string, email:string, password:string} ){
this.username  = input.username;
this.role = 'user';
  }
  
    constructor(input ){
this.username  = input.names;
this.role = 'user';
  }
  
  */


/*export interface ITask {
  $key?: string;
  username: string;
  email: string;
  password: string;
}

export class Task implements ITask {

input:{
username,
email,
password
};


  constructor(input: string) {
    this.input;
  }
}*/