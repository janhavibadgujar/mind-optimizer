import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { PagedataService } from '../services/pagedata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loggedInUserName:any;
  pageInfo: any;
  
  constructor(
    private auth: AuthenticationService, 
    private toastr:ToastrService,
    private pagedataService:PagedataService,
  ){}

  ngOnInit(): void {
   
    setTimeout(() => {
      console.log("Session expired")
      this.logoutUser();
    },3300000);

    // console.log(typeof(this.loggedInUserName))
    // if (this.loggedInUserName === undefined){
    //   this.loggedInUserName = localStorage.getItem('username');
    //   // localStorage.removeItem('username');
    // }
    
  }
  logoutUser(){
    if(this.auth.logoutUser()){
        this.toastr.success('Loggedout Successfully')
    }
    
  }

  
}
