import { Component, OnInit } from '@angular/core';
export class Activies{
  abbrv: string;
  addres: string;
  createdAt:number;
  name: string;
  p_mail: string;
  p_name:string;
}

const ActList: Activies[]= [
  {abbrv:"TTF",addres:"Inera", createdAt: Date.now(),name:"Batu", p_mail:"batu@batu.com", p_name:"Muhatap"},
  {abbrv:"TTF",addres:"Inera", createdAt: Date.now(),name:"Batu", p_mail:"batu@batu.com", p_name:"Muhatap"},
  {abbrv:"TTF",addres:"Inera", createdAt: Date.now(),name:"Batu", p_mail:"batu@batu.com", p_name:"Muhatap"},
  {abbrv:"TTF",addres:"Inera", createdAt: Date.now(),name:"Batu", p_mail:"batu@batu.com", p_name:"Muhatap"}
 
]
@Component({
  selector: 'app-actshell',
  templateUrl: './actshell.component.html',
  styleUrls: ['./actshell.component.css']
})
export class ActshellComponent implements OnInit {
  
  public act =ActList;
  constructor() { }

  ngOnInit() {
  }

  addActivity(){

  }
  navActDetail(){
    
  }

}
