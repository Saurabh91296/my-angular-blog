import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../shared/localStorage.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser:string=null;
  loggedIn:boolean=false;
  constructor(private localStorage:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorage.readData('currentUser')==null){
      this.loggedIn=false;
    }
    else{
      this.currentUser=this.localStorage.readData('currentUser')['username'];
      this.loggedIn=true;
    }
  }

}
