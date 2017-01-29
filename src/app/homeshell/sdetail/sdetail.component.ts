import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sdetail',
  templateUrl: './sdetail.component.html',
  styleUrls: ['./sdetail.component.css']
})
export class SDetailComponent implements OnInit {
  public area: string;
  constructor(private user: UserService) {
  }

  ngOnInit() {
  }

}
