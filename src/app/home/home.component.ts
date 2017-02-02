import { FirebaseListObservable, AngularFire, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items: FirebaseListObservable<any[]>;

  constructor(private user:  UserService , private router: Router , af_home: AngularFire ,public _auth:FirebaseAuth) {


this._auth.subscribe((state: FirebaseAuthState) => {
this.items = af_home.database.list(`/users/${state.uid}`);

})


   }

  ngOnInit() {
  }


/*readFromDatabase(input): void {
this.user.readFromDatabase(this.items);
  }*/




}


