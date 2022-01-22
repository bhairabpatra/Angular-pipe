import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingTimePipe } from './_pipes/reading-time.pipe';

import { ReadingTimePipe } from './_pipes/reading-time.pipe';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './widgets/events/events.component';
import { EventGalleryComponent } from './widgets/event-gallery/event-gallery.component';
import { QuickLinksComponent } from './widgets/quick-links/quick-links.component';
import { PeopleCultureAnnouncementComponent } from './widgets/people-culture-announcement/people-culture-announcement.component';
import { WidgetService } from './widgets/wideget/widget.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReadingTimePipe,
    HomeComponent,
    EventsComponent,
    EventGalleryComponent,
    QuickLinksComponent,
    PeopleCultureAnnouncementComponent
    ReadingTimePipe
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
