import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books = [
    { id: 1, imageUrl: './assets/book-cover7.jpg', title: 'The Girl of Ink & Stars', description: 'Most Popular', author: 'Kiran Millwood Hargrave'},
    { id: 2, imageUrl: './assets/book-cover9.jpg', title: 'Harry Potter', description: 'Fiction', author: 'J.K.Rowling'},
    { id: 3, imageUrl: './assets/book-cover10.jpg', title: 'The Mirenda Prodject', description: 'Science & Research', author: 'Matthew Cesca'},
    { id: 4, imageUrl: './assets/book-cover8.jpg', title: 'The Imperfection of Memory', description: 'Fiction', author: 'Angelina Aludo'},
    { id: 5, imageUrl: './assets/book-cover1.jpg', title: 'The Little', description: 'Children', author: 'Jean Lumir'},
    { id: 6, imageUrl: './assets/book-cover3.jpg', title: 'The Dream Arts', description: 'Art & Painting', author: 'Tom Maloney'},
    { id: 7, imageUrl: './assets/book-cover2.jpg', title: 'Head Kid', description: 'Children', author: 'David Baddiel'},
    { id: 8, imageUrl: './assets/book-cover6.jpg', title: 'The Journey to Moon', description: 'Science & Research', author: 'Max Bron'},
  ]

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      if(document.documentElement.scrollTop > 250) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-100px";
      }
    }
  }
  
  
 ngOnInit() {

}

}
