import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { headerAnimation } from '../../../assets/animations';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  addClient() {
    this.user.navigateURL('/home/(inside:client/add)');
  }
}
