import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  constructor(private router: Router) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('button');
    const navbar =  document.getElementById('toolbar');
    if (button) {
      button.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    }
    if(navbar) {
      navbar.style.top = window.scrollY > 200 ? '0': '-100px';
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigate() {
    this.router.navigate(['/about']);
  }
}
