import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../widgets/wideget/widget.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  post:any = [];
  constructor(private postService:WidgetService) { }

  ngOnInit(): void {
      this.getPost()
  }

  getPost(){
      this.postService.getPost().subscribe((post) =>{
            this.post = post
      })
  }


}
