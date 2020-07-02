import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { Login } from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login= new Login();
  submitted = false;


  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      userName:['',[Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
 
}
