import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {  FirebaseAuthState } from 'angularfire2';
import { UserService } from './../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public post;
  public authState: FirebaseAuthState;
  constructor(private user: UserService, public aut: AuthService) { 
    this.aut.auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      this.aut.af.database.list(`/users/${state.uid}`).$ref.once('value',snapshot=>{
          this.post = (snapshot.val().name)
         // console.log(this.post); subscribe yapmamak için ref once ı kullandık. Aynı mantık fakat subscribe gibi ortamı devamlı dinlemiyor
        });// this.post a atamamızın sebebi ekrana yazdırabilmek.
   
      })
      
    /* this.post
      .subscribe(snapshots=> {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key)
          console.log(snapshot.val().data.name)
      
        });
    })*/ //subscribe ile kullanımı
      
  }
  ngOnInit() {
  }

}
