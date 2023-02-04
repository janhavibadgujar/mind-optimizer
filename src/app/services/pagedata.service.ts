import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagedataService {
    title = ''
  private pageInfo: any = 'Dashboard';
  private getOrgInfo: any;
  private getOrgID: any;
    constructor() {
    }
    private TitleSource = new BehaviorSubject(this.title);
    currentValue = this.TitleSource.asObservable();

    private deviceUpdate = new BehaviorSubject('');
    sharedMessage = this.deviceUpdate.asObservable();

    private AlertUpdate = new BehaviorSubject('');
    sharedAlert = this.AlertUpdate.asObservable();

    private GatewayUpdate = new BehaviorSubject('');
    gatewayAlert = this.GatewayUpdate.asObservable();

    private orgInfo = new BehaviorSubject('');
    orgInfoDetails = this.orgInfo.asObservable();

    private orgId = new BehaviorSubject('');
    orgIdDetails = this.orgId.asObservable();

    private fileFormate = new BehaviorSubject('');
    downloadFiles = this.fileFormate.asObservable();

    subject = new Subject<any>();

    subject1 = new Subject<any>();

    // files = new Subject<any>();

    history = new Subject<any>();

    report = new Subject<any>();

    datefilter = new Subject<any>();

    avg = new Subject<any>();

    vibration = new Subject<any>();

    changeTitle(titleName:string) {
      this.pageInfo = titleName;
        this.TitleSource.next(titleName);
    }
    setOrgDetails(org:string) {
      this.getOrgInfo = org;
        this.orgInfo.next(org);
    }
    getOrgDetails() {
      return this.getOrgInfo;
    }

    setOrgId(org:string) {
      this.getOrgID = org;
        this.orgId.next(org);
    }
    getOrgId() {
      return this.getOrgID;
    }

    getPageInfo(){
      return this.pageInfo;
    }

    nextMessage(deviceUpdate: string) {
        console.log("MESSAGE----",deviceUpdate)
      this.deviceUpdate.next(deviceUpdate)
    }

    nextAlert(AlertUpdate: string) {
      this.AlertUpdate.next(AlertUpdate)
    }

    nextGateway(GatewayUpdate: string) {
      this.GatewayUpdate.next(GatewayUpdate)
    }
    
    // downloadFile(data: string) {
    //   this.fileFormate.next(data);
    // }

    exportFiles(data: any) {
      this.subject.next(data);
    }

    searchData(data: string) {
      this.subject1.next(data);
    }

    // checkDetails(data: any) {
    //   this.files.next(data);
    // }

    deviceHistory(data: any) {
      console.log('555')
      this.history.next(data);
    }

    deviceReport(data: any) {
      console.log('666')
      this.report.next(data);
    }

    filterForPdf(data: any) {
      this.datefilter.next(data);
    }

    showAvg(data: any) {
      this.avg.next(data);
    }

    filterVibration(data: any) {
      this.vibration.next(data);
    }
}