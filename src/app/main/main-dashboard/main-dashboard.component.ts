import { Component, Input, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagedataService } from 'src/app/services/pagedata.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  // @Input() vehicleImg:string = "src/assets/images/carImg.jpeg";
  BaseUrl: string = environment.baseUrl;
  Locations: any=[];
  evseList: any=[];
  iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  data:any=[];
  // allAssets: any;

  constructor(
    private pageService:PagedataService,
    private router: Router,
    private profile : ProfileService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {   
    this.getAllAssets(); 
    // this.generateLocationList();
    this.pageService.changeTitle('Dashboard');
    this.pageService.sharedMessage.subscribe((res: any) => {
      console.log('PUSHER-DATA',res)
    })

  }
  getAllAssets() {
    this.SpinnerService.show();
    this.profile.getAllAssets().subscribe((response)=>{
      console.log('All assetsss',response);
      // this.userInfo = response.data
      this.data = response;
      this.generateLocationList() 

      this.SpinnerService.hide();
      // return this.userInfo
  },
  (catchError)=>{
      // this.main.logoutUser()
  }
  )
  }
  generateLocationList() {
    console.log('this.data', this.data)
    this.data.forEach((element: any) => {
      this.evseList = [];
      // let latLong = element.charger_location.split(', ');
      let lat = element.lat
      let lng = element.long
      this.evseList.push(element.charger_nickname, lat, lng);
      this.Locations.push(this.evseList);
    });
    this.showMapLocation(this.Locations);
  }
showAssetDetails(item : any) {
  console.log('inside asset details');
  this.router.navigate(['/asset',{assetId : item.id}])
}
  showMapLocation(data: any) {
    // Map Code
    let mapElement: HTMLElement = document.getElementById('map') as HTMLElement;
    let map: any;
    let LocationsForMap: any;
    LocationsForMap = this.Locations;

    map = new google.maps.Map(mapElement, {
      zoom: 3,
      center: new google.maps.LatLng(28.704, 77.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < LocationsForMap.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          LocationsForMap[i][1],
          LocationsForMap[i][2]
        ),
        // icon: this.iconBase + "parking_lot_maps.png",
        // label: "Test label",
        map: map,
      });
    }
  }
}
