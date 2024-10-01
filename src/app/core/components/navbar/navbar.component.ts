import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() { }

  scrollToSection(value: string) {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['app/dashboard'])
    }
  }

  onNavigate() {
    this.router.navigate(['app/addProject']);
  }
}
