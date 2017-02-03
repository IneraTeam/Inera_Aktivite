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
 public name: string;
  public role: string;
  constructor(private user: UserService) { 
   /* this.aut.auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      this.aut.af.database.list(`/users/${state.uid}`).$ref.once('value',snapshot=>{
         // console.log(this.post); subscribe yapmamak için ref once ı kullandık. Aynı mantık fakat subscribe gibi ortamı devamlı dinlemiyor
          this.post = (snapshot.val().name)
        });// this.post a atamamızın sebebi ekrana yazdırabilmek.
   
      })*/
      
    this.user.info
    .then((basics) => {console.log(basics.val())
    this.name = basics.val().name;
    this.role = basics.val().role;  
    }
  )






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
