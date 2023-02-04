import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  mapElement:any;
  userInfo: any;
  formatAddress:string = "";
  constructor(
    private profile: ProfileService, 
    private SpinnerService: NgxSpinnerService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.getUserInfo();

  }
  getUserInfo() {
   
      this.profile.getUser().subscribe((response)=>{
          console.log(' uSER iNFO ',response);
          // this.userInfo = response.data
          this.userInfo = response
          // this.formatAddress = this.singleEvseData.charger_address.replace(' ','%20');
          this.formatAddress = '<iframe src="https://maps.google.com/maps?hl=en&amp;q='+'pune'+'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
          this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
          this.SpinnerService.hide();
          return this.mapElement;
          this.SpinnerService.hide();
          return this.userInfo
      },
      (catchError)=>{
          // this.main.logoutUser()
      }
      )
    
  }

}
