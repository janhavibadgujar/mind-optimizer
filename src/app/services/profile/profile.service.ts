import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BaseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    // console.log("in LoginUser service function",login)
    return this.http.get(`${this.BaseUrl}/user`);
  }
  updateUser(user:any):Observable<any>{
    return this.http.put(`${this.BaseUrl}/user`,user);
  }
  
  updateUserProfilePic(image:any):Observable<any>{
    console.log("profile image service",image)
    return this.http.put(`${this.BaseUrl}/upload_image`,image)
  }
}
