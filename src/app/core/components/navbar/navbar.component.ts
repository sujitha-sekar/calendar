import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.initStickyNavbar();
    this.initParticles();
    this.initStars();
  }

  private initStickyNavbar() {
    const navbar = this.el.nativeElement.querySelector('#navbar');
    if (navbar) {
      const sticky = navbar.offsetTop;
      window.onscroll = () => {
        if (window.pageYOffset > sticky) {
          this.renderer.addClass(navbar, 'sticky');
        } else {
          this.renderer.removeClass(navbar, 'sticky');
        }
      };
    } else {
      console.error('Navbar element not found');
    }
  }

  private initParticles() {
    const particleContainer = this.el.nativeElement.querySelector('.particles');
    console.log('Particle container:', particleContainer);
    if (particleContainer) {
      for (let i = 0; i < 100; i++) {
        const particle = this.renderer.createElement('div');
        this.renderer.addClass(particle, 'particle');
        this.renderer.setStyle(particle, 'top', `${Math.random() * 100}vh`);
        this.renderer.setStyle(particle, 'left', `${Math.random() * 100}vw`);
        this.renderer.setStyle(particle, 'animationDelay', `${Math.random() * 10}s`);
        this.renderer.appendChild(particleContainer, particle);
      }
    } else {
      console.error('Particles container not found');
    }
  }

  private initStars() {
    const starBackground = this.el.nativeElement.querySelector('.star-background');
    if (starBackground) {
      for (let i = 0; i < 300; i++) {
        const star = this.renderer.createElement('div');
        this.renderer.addClass(star, 'star');
        this.renderer.setStyle(star, 'top', `${Math.random() * 100}vh`);
        this.renderer.setStyle(star, 'left', `${Math.random() * 100}vw`);
        this.renderer.appendChild(starBackground, star);
      }
    } else {
      console.error('Star background element not found');
    }
  }
  id: number = 1;
  onTab(index: number) {
    this.id = index;
  }
}
