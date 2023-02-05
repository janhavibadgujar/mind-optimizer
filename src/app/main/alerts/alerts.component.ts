import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { elementAt } from 'rxjs';
import { ProfileService } from 'src/app/services/profile/profile.service';

export interface AlertDetails {
  id:string;
  name:string;
  condition:string;
  message:string;
  time:string;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  displayedColumns: string[] = ["id","name", "condition","message","time"];
  dataSource!: MatTableDataSource<AlertDetails>;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  alertForm!:FormGroup;
  assetList: any=[];
  vechiles:any=[];
  condition_type: string='';
  selectedIndex!: number;
  
  constructor(
    private fb:FormBuilder,
    private profileService:ProfileService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.alertForm=this.fb.group({
      name:['',Validators.required],
      value:['',Validators.required],
      condition:['',Validators.required],
      asset:['']
    });
    this.getAlerts();
    this.getAllAssets()
  }

conditions=[
  'Fuel Less Than',
  'Speed Greater Than',
  'Temperature Greater Than',
]
  onSubmit()
  {
      const data={

      }
  }

  get alertconfigFormControl() {
    return this.alertForm.controls;
  }

  getAllAssets()
  {
    this.profileService.getAllAssets().subscribe((res:any)=>{
      console.log("Res--",res)
      this.vechiles=res;
    })
  }

  getAlerts()
  {
    this.SpinnerService.show();
    this.profileService.getAllAlerts().subscribe((res:any)=>{
      console.log("Alert---",res)
    
      this.dataSource = new MatTableDataSource<AlertDetails>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.SpinnerService.hide();
    })
  }

  selectAssets(event:any,index:any)
  {
    this.selectedIndex = event.target.checked ? index : undefined;
    
    if(event.target.checked==true)
    {
      this.assetList.push(event.target.value)
    }
    if(event.target.checked==false)
    {
      this.assetList=this.assetList.filter((item: any) => item !==event.target.value )
    }
  }

  selectCondition(event:any)
  {
    this.condition_type=event.target.value
  }


}
