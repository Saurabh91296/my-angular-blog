import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {IUser} from "../shared/user.modal";
import {LocalStorageService} from "../shared/localStorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username;password;
 private errMsg:string;
  constructor(private userService:UserService,private router:Router,private localStorage:LocalStorageService) { }

  ngOnInit() {
  }

  login(formValues){
    this.userService.getUser().subscribe(
  result=>{let userList:IUser[]=result
   this.authenticateUser(userList,formValues);
  },
      error=>{this.errMsg='invalid username or password'}
    );
  }
  authenticateUser(userList:IUser[],formValues:any){
    let authFlag:boolean=false;
    for(let i=0;i<userList.length;i++){
      if(userList[i].username==formValues.username && userList[i].password==formValues.password){
        this.localStorage.setData("currentUser",userList[i]);
        authFlag=true;break;
      }
    }
    if(authFlag){
      this.router.navigate(['/blog']);
    }
    else{

    }

  }
}
