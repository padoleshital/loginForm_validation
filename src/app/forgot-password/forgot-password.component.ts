import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false;
  forgotForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })

  }
  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    let req = this.forgotForm.value.email;
    localStorage.setItem('useremail', req);




    if (this.forgotForm.invalid) {
      return;
    }

    this.route.navigate(['/password-link']);

  }

}
