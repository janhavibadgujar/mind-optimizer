import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  BaseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) { }
  loginUser(login: any): Observable<Login> {
    console.log("in LoginUser service function",login)
    return this.http.post<Login>(`${this.BaseUrl}/login/`, login);
  }
  registerUser(register: any): Observable<any> {
    console.log("in LoginUser service function",register)
    return this.http.post<any>(`${this.BaseUrl}/signup`, register);
  }
  registerConfirmUser(register: any): Observable<any> {
    console.log("in LoginUser service function",register)
    return this.http.post<any>(`${this.BaseUrl}/confirm_signup`, register);
  }
  forgotPassword(password: any): Observable<any> {
    console.log("in forgot password service function",password)
    console.log("Base url",this.BaseUrl)
    return this.http.post<any>(`${this.BaseUrl}/forgot_password`, password);
  }
  forgotPasswordConfirm(password: any): Observable<any> {
    console.log("in confirm forgot password service function",password)
    return this.http.post<any>(`${this.BaseUrl}/confirm_forgot_password`, password);
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
    return true;
  }

  
}
