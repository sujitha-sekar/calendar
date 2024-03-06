import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  selectedImage: number = 0

  gallery = [
    { book: './assets/book2.png', title: 'Books' },
    { book: './assets/blog.png', title: 'Blogs' },
    { book: './assets/book2.png', title: 'Books' }
  ]

}
