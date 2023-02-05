import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagedataService } from 'src/app/services/pagedata.service';
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
  assetInfo: any;
  setLat: any;
  setLong: any;
  pusherData: any;
  // mapElement: HTMLElement = document.getElementById('map') as HTMLElement;
  constructor(
    private profile: ProfileService, 
    private SpinnerService: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private pagedataService : PagedataService,
    private pageService:PagedataService,
  ) {
    this.pagedataService.assetCurrentVal.subscribe((res:any)=>{
      console.log('assacsac', res)
      if(res !=null || res != ''){
       this.assetInfo = res;
      }
    //  this.userName = localStorage.getItem('userEmail')
    })
   }

  ngOnInit(): void {
    this.getUserInfo();
    
    this.pageService.sharedMessage.subscribe((res: any) => {
      console.log('PUSHER-DATA',res);
      this.pusherData = res
      this.setLat = res.latitude;
      this.setLong = res.longitude;
      console.log('this.assetInfo',this.assetInfo,this.pusherData)
        this.formatAddress = '<iframe src="https://maps.google.com/maps?hl=en&output=embed&amp;q='+this.setLat+ ','+this.setLong+'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
    this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
  //  if(this.assetInfo.id == this.pusherData.asset_id) {
  //   console.log('inside if')
  //   this.formatAddress = '<iframe src="https://maps.google.com/maps?hl=en&output=embed&amp;q='+this.setLat+ ','+this.setLong+'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
  //   this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
  // }else {
  //   console.log('inside else')
  //   this.formatAddress = '<iframe src="https://maps.google.com/maps?hl=en&output=embed&amp;q='+this.assetInfo.lat+ ','+this.assetInfo.long+'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
  //     this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
  // }
      
    })
  }
  getUserInfo() {
   
      this.profile.getUser().subscribe((response)=>{
          console.log(' uSER iNFO ',response);
          // this.userInfo = response.data
          this.userInfo = response
          // this.formatAddress = this.singleEvseData.charger_address.replace(' ','%20');
          this.formatAddress = '<iframe src="https://maps.google.com/maps?hl=en&output=embed&amp;q='+this.setLat+ ','+this.setLong+'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
          this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
         

          
          this.SpinnerService.hide();
      },
      (catchError)=>{
          // this.main.logoutUser()
      }
      )
    
  }

}
