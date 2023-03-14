import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagedataService } from 'src/app/services/pagedata.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  apiKey: string = environment.apiKey;

  mapElement:any;
  userInfo: any;
  formatAddress:string = "";
  assetInfo: any;
  setLat: any='19.1590';
  setLong: any='72.9986';
  pusherData: any;
  battery:any;
  engine:any;
  device:any;
  checked1: any;
  asset_id:any;
  count:number=0;
  way:any=[];
  temp: any;
  constructor(
    private profile: ProfileService, 
    private SpinnerService: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private pagedataService : PagedataService,
    private pageService:PagedataService,
    private router: Router,
  ) {
    this.battery='0';
    this.engine='0';
    this.device='0';
    this.checked1='0';
    this.pagedataService.assetCurrentVal.subscribe((res:any)=>{
      if(res !=null || res != ''){
       this.assetInfo = res;
      }
    //  this.userName = localStorage.getItem('userEmail')
    })
   }

  ngOnInit(): void {
    this.asset_id=localStorage.getItem("asset_id")
    this.battery='0';
    this.engine='0';
    this.device='0';
    this.checked1='0';
    this.count=0;
    
    this.pageService.sharedMessage.subscribe((res: any) => {
      console.log('PUSHER-DATA',res);
      if(this.asset_id === res?.device?.asset_id)
      {
        this.pusherData = res
        this.battery=res?.device?.battery;
        this.device=res?.device?.device;
        this.engine=res?.device?.engine;
        this.checked1=res?.device?.checked;
        const data={
          latitude:res?.device?.latitude,
          longitude:res?.device?.longitude
        }
        this.way.push(data)
       
        this.count=this.count+1;
        if(this.count == 1)
        {
          var origin=`${this.setLat},${this.setLong}`;
          // var destination="19.2215,73.1645";
          // this.temp="19.2215,73.1645"
          var destination=`${res?.device?.latitude},${res?.device?.longitude}`;
          this.temp=`${res?.device?.latitude},${res?.device?.longitude}`

          this.formatAddress = `<iframe src="https://www.google.com/maps/embed/v1/directions?key=${this.apiKey}&origin=${origin}&destination=${destination}" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`
      this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
      return this.mapElement;
        }
        else if(this.count ==2)
        {var x=this.temp;
          // var destination="19.2403,73.1305"
          // var y="|19.2403,73.1305"
          var y=`|${res?.device?.latitude},${res?.device?.longitude}`
          var origin=`${this.setLat},${this.setLong}`;
          var destination=`${res?.device?.latitude},${res?.device?.longitude}`;
          this.temp=x.concat(y)
         
          this.formatAddress = `<iframe src="https://www.google.com/maps/embed/v1/directions?key=${this.apiKey}&origin=${origin}&destination=${destination}&waypoints=${this.temp}" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`
      this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
      return this.mapElement;
        }
        else if (this.count >2 )
        { 
          var origin=`${this.setLat},${this.setLong}`;
          var destination=`${res?.device?.latitude},${res?.device?.longitude}`;
          var y1=this.temp
          var x1=`|${res?.device?.latitude},${res?.device?.longitude}`
          this.temp=y1.concat(x1);

          this.formatAddress = `<iframe src="https://www.google.com/maps/embed/v1/directions?key=${this.apiKey}&origin=${origin}&destination=${destination}&waypoints=${this.temp}" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`
      this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
      return this.mapElement;
        }
        
      }
    })

    this.formatAddress = '<iframe src="https://maps.google.com/maps?hl=en&output=embed&amp;q='+this.setLat+ ','+this.setLong+'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
      this.mapElement = this.sanitizer.bypassSecurityTrustHtml(this.formatAddress);
      return this.mapElement;
  }
 

  carDetails=[
    {
      asset_id:"1",
      vechile:"Maruti Suzuki Ciaz",
      name:"Clifton Duncan",
      number:"MH15HZ9090"
    },
    {
      asset_id:"2",
      vechile:"Swift Dzire",
      name:"Clifton Duncan",
      number:"MH15HZ9090"
    },
    {
      asset_id:"3",
      vechile:"Mahindra Thar",
      name:"Clifton Duncan",
      number:"MH15HZ9090"
    },
    {
      asset_id:"4",
      vechile:"Honda Amaze",
      name:"Clifton Duncan",
      number:"MH15HZ9090"
    },
  ]

}
