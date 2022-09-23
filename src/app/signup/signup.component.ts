import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  signUpForm!: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({

      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  //get for easy access to form fields
  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    console.log(this.signUpForm.value);

    if (this.signUpForm.invalid) {
      return;
    }

    let reqObject =
    {
      id: this.signUpForm.value.id,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    }
    this.loading = true;
    this.authService.signup(reqObject).subscribe(res => {
      localStorage.setItem('token', 'data');

      console.log(this.signUpForm.value.email,
        this.signUpForm.value.password);
      alert("signup Successful")

      this.router.navigate(["/login"])

    })


  }


}
