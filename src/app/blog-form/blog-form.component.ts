import { Component, OnInit } from '@angular/core';
import {Iblog, logo} from '../shared/user.modal';
import {LocalStorageService} from "../shared/localStorage.service";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
    title;content;category;
  logo=logo;
  blog:any;
  constructor( private localStorage:LocalStorageService,private userService:UserService,
               private router:Router) {
    this.blog={};
  }

  ngOnInit() {
  }

  createBlog(formValues){
    let id=0;
    this.userService.getBlogs().subscribe(
      result=>{
        this.blog['id']=result[result.length-1].id+1;
        this.blog['title']=formValues.title;
        this.blog['content']=formValues.content;
        this.blog['category']=formValues.category;
        this.blog['logo']=this.logo;
        this.blog['postedBy']=this.localStorage.readData("currentUser")['id'];
        this.blog['namePostedBy']=this.localStorage.readData("currentUser")['username'];
        this.blog['favouriteOf']=[];
        this.userService.postBlog(this.blog).subscribe(
          result=>{
            console.log(result);
            this.router.navigate(['/blog']);
          }
        )
      }
          )

  }
  fileEvent(evt) {
  const files = evt.target.files;
  const file = files[0];

  if (files && file) {
  const reader = new FileReader();

  reader.onload = this._handleReaderLoaded.bind(this);

  reader.readAsBinaryString(file);
}
}

_handleReaderLoaded(readerEvt) {
  const binaryString = readerEvt.target.result;
  this.logo = btoa(binaryString);
}


}
