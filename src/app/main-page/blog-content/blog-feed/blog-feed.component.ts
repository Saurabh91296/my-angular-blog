import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../shared/user.service";
import {LocalStorageService} from "../../../shared/localStorage.service";

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.css']
})
export class BlogFeedComponent implements OnInit {
@Input()
 blog:any;

 user:any;
 favourite:boolean=false;
  constructor(private router:Router,private userService:UserService,private localStorage:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorage.readData('currentUser')!=null){
    if(this.blog.favouriteOf.includes(this.localStorage.readData('currentUser')['id'])){
      this.favourite=true;
    }}
  }
  readBlog(){
    this.router.navigate([`/blog-page/${this.blog.id}`]);
  }
  changeFavourite(){
    let array:any[];
    if(this.favourite){
    array= this.blog.favouriteOf.filter((item)=>{
      return item!=this.localStorage.readData('currentUser')['id'];
    });
      this.blog.favouriteOf=array;
      this.favourite=false;
    }
    else{
      this.blog.favouriteOf.push(this.localStorage.readData('currentUser')['id']);
      this.favourite=true;
    }

    this.userService.updateFavourite(this.blog.id,this.blog).subscribe(
      res=>{console.log(res)}
    );
  }

}
