import { UserService } from './../../../services/user/user.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})

export class DetailComponent {
    constructor(private user: UserService) {

    }

    qwe(val) {
        console.log(val);
    }
}
