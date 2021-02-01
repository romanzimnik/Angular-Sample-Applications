import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards-application';

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain!'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'biker1990',
      content: 'I did some biking today.'
    }
  ]
}
