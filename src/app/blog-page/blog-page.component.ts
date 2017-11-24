import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/user.service";
import {LocalStorageService} from "../shared/localStorage.service";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  blogId:any;
  blog:any;
  loggedIn:boolean=true;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private router:Router,
              private localStorage:LocalStorageService ) { }

  ngOnInit() {
    if(this.localStorage.readData('currentUser')==null){
      this.loggedIn=false;
    }
    this.blogId=this.activatedRoute.snapshot.params['id'];
    this.userService.getOneBlog(this.blogId).subscribe(
      res=>{
        this.blog=res;
        console.log(this.blog);
      }
    )
  }
  editBlog(){
    this.router.navigate([`edit-blog/${this.blog.id}`]);
  }
  deleteBlog(){
    this.userService.deleteBlog(this.blogId).subscribe(
      res=>{this.router.navigate(['blog/'])}
    )
  }
}
