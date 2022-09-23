import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordLinkComponent } from './forgot-password-link/forgot-password-link.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },

  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'reset-password',component:ResetPasswordComponent
  },
  {
    path:'password-link',component:ForgotPasswordLinkComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
