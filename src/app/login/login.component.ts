import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { LoginUser } from '../_modal/login-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  Username:any

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  get f() {
    return this.loginForm.controls
  }
  onSubmit() {
    this.submitted = true;

    console.log(this.loginForm.value);
  
    //stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  
    let reqObject = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.loading = true;
    this.authService.login(reqObject)
      .subscribe(data => { 
        localStorage.setItem('token', data.token)
        alert("data Added Succecful");
        this.route.navigate(["#"]);
      })
  
  }
}