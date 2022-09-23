import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../_modal/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) { }
  public BASE_URL = environment.baseUrl;

  login(data: any) {
    return this.http.post<any>(`${this.BASE_URL}login`, data)
    localStorage.setItem(data, JSON.stringify(data))
  }
  
  signup(data: any)
  { 
    return this.http.post(`${this.BASE_URL}register`, data)
    localStorage.setItem(data,JSON.stringify(data))

  }
}
