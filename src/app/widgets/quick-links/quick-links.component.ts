import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../wideget/widget.service';
@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  quickLinks:any=[]
  constructor(private widgetService:WidgetService) { }

  ngOnInit(): void {
    this.getquickLinks()
  }

  getquickLinks(){
      this.widgetService.getQuicklinks().subscribe((links) =>{
          this.quickLinks = links
      })
  }
}
