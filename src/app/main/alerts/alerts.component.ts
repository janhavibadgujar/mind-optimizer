import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
