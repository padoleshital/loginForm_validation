import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  invalid: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group(
      {
        password: ['', Validators.required],
        conform_password: ['', Validators.required]
      },
      {
        validators: this.MustMatch('password', 'conform_password')
      }
    );
  }
  get f() { return this.resetForm.controls };

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
       
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true })
        }
      else {
        matchingControl.setErrors(null)
      
      }


    }
  }
  onSubmit() {
    this.submitted = true;

    if (this.invalid.value)
    {
      return
        }
  }

}
