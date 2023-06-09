
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BaseUrl: string = environment.baseUrl;
  // header : any = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token')); 
// this.headers.set('content-type', 'application/json')
// headers.set('Access-Control-Allow-Origin', '*')
   
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const userId = localStorage.getItem('userId')
   
    return this.http.get(`${this.BaseUrl}/user_details/${userId}`, {headers:header});
  }
  getAllAssets(): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const userId = localStorage.getItem('userId')
   
    return this.http.get(`${this.BaseUrl}/asset/${userId}`, {headers:header});
  }

  getAllAlerts(): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const userId = localStorage.getItem('userId')
   
    return this.http.get(`${this.BaseUrl}/alert/${userId}`, {headers:header});
  }
  updateUser(user:any):Observable<any>{
    return this.http.put(`${this.BaseUrl}/user`,user);
  }
  
  updateUserProfilePic(image:any):Observable<any>{
    console.log("profile image service",image)
    return this.http.put(`${this.BaseUrl}/upload_image`,image)
  }

  createRule(data:any):Observable<any>{
    var header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.post(`${this.BaseUrl}/rule/`,data,{headers:header})
  }
}
