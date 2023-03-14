import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagedataService } from 'src/app/services/pagedata.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  userName:any;
  loggedUserInfo:any;
  pageInfo: any;
  userInfo:any;
  constructor(private profile:ProfileService,
    private pagedataService:PagedataService,
    private routes: Router,
    private SpinnerService: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.pagedataService.currentValue.subscribe((res:any)=>{
      if(res !=null || res != ''){
       this.pageInfo = res;
      }
     //this.userName = localStorage.getItem('userEmail')
    })
   // this.getUserInfo() ;
    // this.userName = localStorage.getItem('username');
    // this.profile.getUser().subscribe((response)=>{
    //   this.loggedUserInfo = response.data;
    // });
  }
  getUserInfo(){
    this.profile.getUser().subscribe((response)=>{
        // console.warn(response);
        // this.userInfo = response.data
        this.userInfo = response

        this.SpinnerService.hide();
    },
    (catchError)=>{
        // this.main.logoutUser()
    }
    )
  }
  logout()
  {
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
    this.routes.navigate(['login'])
  }

}
