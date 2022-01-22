import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  api_url="http://localhost:3000/events"

  constructor(private http:HttpClient) {

  }

  getEvents(){
        return this.http.get(this.api_url)
  }
  getQuicklinks(){
      return this.http.get('http://localhost:3000/quickLinks')
  }
  getPost(){
      return this.http.get(this.api_url)
  }
}
