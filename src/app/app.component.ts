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
    console.log("channelName",channelName)
    console.log("channel",channel);
    channel.bind(`20d8acf8-9301-4a90-8348-88b5a76f043e`, function (data:any) {
      console.log('outside if data');
      that.gettingDeviceData(data);
    })
    // channel.bind(`device-undetected-for-${localStorage.getItem('organization_id')}`, function (data:any) {
    //   console.log('outside if data');
    //   that.gettingDeviceData(data);
    // })
  }

  gettingDeviceData(data:any)
  {
    console.log("PUSHER DATA----",data);
    this.dataService.nextMessage(data);
  }
}


