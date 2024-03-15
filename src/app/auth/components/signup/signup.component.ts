import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  constructor(private router: Router){}

  ngOnInit(): void {

      this.signupForm = new FormGroup({
        email: new FormControl(null)
      });  

  };

  onSignup(): void {
    this.router.navigate(['login']);
  }
}
