import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-hshell',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HShellComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
