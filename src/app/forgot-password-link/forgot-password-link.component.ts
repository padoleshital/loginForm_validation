import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-link',
  templateUrl: './forgot-password-link.component.html',
  styleUrls: ['./forgot-password-link.component.css']
})
export class ForgotPasswordLinkComponent implements OnInit {
  public email :any

  constructor() { }
  title = "string";

  ngOnInit(): void {
 this.email =  localStorage.getItem('useremail')
  }


}
