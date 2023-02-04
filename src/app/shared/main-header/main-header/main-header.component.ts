import { Component, OnInit } from '@angular/core';
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
  constructor(private profile:ProfileService,
    private pagedataService:PagedataService,) { }

  ngOnInit(): void {
    this.pagedataService.currentValue.subscribe((res:any)=>{
      if(res !=null || res != ''){
       this.pageInfo = res;
      }
     
    })
    // this.userName = localStorage.getItem('username');
    // this.profile.getUser().subscribe((response)=>{
    //   this.loggedUserInfo = response.data;
    // });
  }

  logout()
  {
   // this.routes.navigate[]
  }

}
