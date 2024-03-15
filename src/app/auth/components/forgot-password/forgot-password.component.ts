import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPassword!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.forgotPassword = new FormGroup({
      email: new FormControl(null),
      newPassword: new FormControl(null),
      confirmPassword: new FormControl(null)
    });
  }

  onLogin() {
    this.router.navigate(['login'])
  }
}
