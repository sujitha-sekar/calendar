import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  books = [
    { id: 1, imageUrl: './assets/book-cover7.jpg', title: 'The Girl of Ink & Stars', description: 'Most Popular', author: 'Kiran Millwood Hargrave' },
    { id: 2, imageUrl: './assets/book-cover9.jpg', title: 'Harry Potter', description: 'Fiction', author: 'J.K.Rowling' },
    { id: 3, imageUrl: './assets/book-cover10.jpg', title: 'The Mirenda Prodject', description: 'Science & Research', author: 'Matthew Cesca' },
    { id: 4, imageUrl: './assets/book-cover8.jpg', title: 'The Imperfection of Memory', description: 'Fiction', author: 'Angelina Aludo' },
    { id: 5, imageUrl: './assets/book-cover1.jpg', title: 'The Little', description: 'Children', author: 'Jean Lumir' },
    { id: 6, imageUrl: './assets/book-cover3.jpg', title: 'The Dream Arts', description: 'Art & Painting', author: 'Tom Maloney' },
    { id: 7, imageUrl: './assets/book-cover2.jpg', title: 'Head Kid', description: 'Children', author: 'David Baddiel' },
    { id: 8, imageUrl: './assets/book-cover6.jpg', title: 'The Journey to Moon', description: 'Science & Research', author: 'Max Bron' },
  ];

  constructor(private router: Router) { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.style.top = (document.documentElement.scrollTop > 250) ? "0" : "-100px";
    }
    this.handleButtonVisibility();
  }

  handleButtonVisibility() {
    const button = document.getElementById('button');
    if (button) {
      button.style.display = (window.pageYOffset > 300) ? 'block' : 'none';
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  onLogin() {
    this.router.navigate(['/login']);
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}
