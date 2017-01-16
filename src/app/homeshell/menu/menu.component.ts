import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public role;
  public isNavigated: boolean;
  constructor(private actv: ActivatedRoute, private router:Router) {
    this.actv.params.subscribe(param => {
      this.role = param['role'];
    });
  }
  ngOnInit() {
  }

  nav(event$, target) {
    this.router.navigate(['home',
    { outlets: { inside: `${target}`} }
    ]);
  }
}
