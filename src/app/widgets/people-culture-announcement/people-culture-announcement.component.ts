import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../wideget/widget.service'

@Component({
  selector: 'app-people-culture-announcement',
  templateUrl: './people-culture-announcement.component.html',
  styleUrls: ['./people-culture-announcement.component.css']
})
export class PeopleCultureAnnouncementComponent implements OnInit {

  popular:any=[];
  constructor(private widgetService:WidgetService) { }

  ngOnInit(): void {
    this.getPopular()
  }

  getPopular(){
    this.widgetService.getEvents().subscribe((res)=>{
          this.popular = res
    })
  }

}
