import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../wideget/widget.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

 events:any =[];
  constructor(private widgetService:WidgetService) { }

  ngOnInit(): void {
        this.getEvents()

  }
  getEvents(){
      this.widgetService.getEvents().subscribe((res) =>{
            this.events = res
      })
  }
}
