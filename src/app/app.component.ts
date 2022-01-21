import { Component } from '@angular/core';
import { ReadingTimePipe } from './_pipes/reading-time.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes-implements';
  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos est aperiam maxime dicta voluptate? Pariatur sint tempora commodi autem vero repellat voluptates ut dolorum eaque consequuntur accusantium reiciendis, dignissimos enim deserunt recusandae doloribus iusto ex illum ducimus corporis! Dolor quisquam voluptate commodi nostrum, odio minima perspiciatis sint dolorum soluta nulla."
}
