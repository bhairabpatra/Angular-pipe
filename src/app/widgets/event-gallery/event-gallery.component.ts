import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../wideget/widget.service'
@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.css']
})
export class EventGalleryComponent implements OnInit {

  eventsGallery:any =[]

  constructor(private widgetService:WidgetService) { }

  ngOnInit(): void {
      this.getEventgallery()
  }

  getEventgallery(){

    this.widgetService.getEvents().subscribe((res) =>{
      this.eventsGallery = res
    })

  }

}
