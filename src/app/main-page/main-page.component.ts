import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../shared/localStorage.service";
import {Router} from "@angular/router";
import {UserService} from "../shared/user.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  search:string;
  blogs:any[];
  loggedIn:boolean=true;
  constructor( private localStorage:LocalStorageService,private router:Router,private userService:UserService) { }

  ngOnInit() {
   if(this.localStorage.readData('currentUser')==null){
     // this.router.navigate(['/login']);
     this.loggedIn=false;
    }
    this.loadBlogs('all');

  }

  loadBlogs(category){
    this.userService.getBlogs().subscribe(
      result=>{
          if(category=='all'){
          this.blogs=result;
        }else{
        this.blogs=result.filter((item)=>{
          return item.category==category;
        })}

      }
    )

  }
  loadUsersFav(){
    this.userService.getBlogs().subscribe(
      result=>{
       this.blogs=result.filter(
         (item)=>{
           return item.favouriteOf.includes(this.localStorage.readData('currentUser')['id'])
         }
       )
      console.log(this.blogs)
      }
    )
  }
  loadUsersBlogs(){
    this.userService.getBlogs().subscribe(
      result=>{
        this.blogs=result.filter(
          (item)=>{
            return item.postedBy==this.localStorage.readData('currentUser')['id'];
          }
        )
        console.log(this.blogs)
      }
    )
  }
  updateSearch(){
    this.userService.getBlogs().subscribe(
      result=>{
        this.blogs=result.filter(
          (item)=>{
            return item.title.toLowerCase().includes(this.search.toLowerCase());
          }
        )
        console.log(this.blogs)
      }
    )
  }
  createBlog(){
    this.router.navigate(['/blog-form']);
  }
  logout(){
    this.localStorage.setData('currentUser',null);
    this.router.navigate(['/login']);
  }
}
