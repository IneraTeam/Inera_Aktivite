import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  public recordList$: FirebaseListObservable<any[]>;
  public pathInfo: PathInfo = new PathInfo();
  constructor(private actvRoute: ActivatedRoute, private user: UserService) {
    actvRoute.queryParams.subscribe(q => {
      this.pathInfo.p_list = !q['target'];
      this.pathInfo.title = q['title'];
      this.user.setPageTitle(this.pathInfo.title);
    });
    actvRoute.params.subscribe(param => {
      this.pathInfo.path = param['id'];
      this.recordList$ = this.user.getRecords(this.pathInfo.path);
    });
  }

  ngOnInit() {
  }

  navigateDetail(param: string) {
    this.user.setPageTitle(this.pathInfo.adding);
    this.user.nav(this.pathInfo.path + '/' + param);
  }
}

class PathInfo {
  p_path: string;
  p_title: string;
  p_list: boolean;
  title_add: string;
  title_edit: string;
  constructor() { }
  set path(param: string) { this.p_path = param; }
  set title(param: string) {
    const row: string = param.slice(0, param.length - 3);
    this.p_title = param;
    this.title_add = row + ' Ekle';
    this.title_edit = row + ' Detay';
  }
  get path() { return this.p_path; }
  get title() { return this.p_title; }
  get adding() { return this.title_add; };
}
