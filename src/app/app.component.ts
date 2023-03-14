import { Component, OnInit } from '@angular/core';
import { PagedataService } from './services/pagedata.service';
import { PusherService } from './services/pusherservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private pusherService:PusherService,
    private dataService:PagedataService
  ){}
  ngOnInit(): void {
    this.subscribeUpdatedData();
  }
  title = 'Mind-Optimizers';

  subscribeUpdatedData(){
    var that = this;
    let channelName = 'MindOptimizerAssetTopic';
    var channel = that.pusherService.subscribe(channelName);
  
    console.log("channel",channel);
    channel.bind(`device-detected`, function (data:any) {
      that.gettingDeviceData(data);
    })
  
  }

  gettingDeviceData(data:any)
  {
    this.dataService.nextMessage(data);
  }
}


