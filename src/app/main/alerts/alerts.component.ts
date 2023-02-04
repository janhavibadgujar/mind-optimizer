import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.alertForm=this.fb.group({
      name:['',Validators.required],
      value:['',Validators.required],
      condition:['',Validators.required],
      asset:['']
    })
  }

conditions=[
  'Temperature Greater Than',
  'Fuel Less Than',
  'Speed Greater Than'
]
  onSubmit()
  {

  }

  get alertconfigFormControl() {
    return this.alertForm.controls;
  }


}
