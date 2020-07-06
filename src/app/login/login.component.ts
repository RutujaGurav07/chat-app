import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';


import { Login } from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  Login= new Login();
  submitted = false;
  error:string;


  constructor(private fb:FormBuilder,readonly router: Router, readonly auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      userName:['',[Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required]],
    })
  }

  login(userId: string) {
    this.auth
      .login(userId)
      .then(
        () => this.router.navigateByUrl('/chat'),
        err => (this.error = err)
      );
  }
 
}
