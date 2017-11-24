import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  @Input()
  blogs:any[];
  constructor() { }

  ngOnInit() {
  }

}
