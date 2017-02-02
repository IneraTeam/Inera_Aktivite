import { firebaseConfig } from './../assets/firebaseconfig';
import { Component } from '@angular/core';
import { initializeApp , database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

initializeApp(firebaseConfig);

let root = database().ref('/users/').set({
u: 'aaasfasfas'

  
});
