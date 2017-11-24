import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  title:any;
  blogId:any;
  blog:any;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.blogId=this.activatedRoute.snapshot.params['blog'];
    this.userService.getOneBlog(this.blogId).subscribe(
      res=>{

        this.blog=res}
    )
  }
updateBlog(){
    this.userService.updateFavourite(this.blog.id,this.blog).subscribe(
      res=>{
        this.router.navigate(['/blog']);
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
    this.blog.logo = btoa(binaryString);
  }
}
