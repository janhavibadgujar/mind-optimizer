import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MaterialAllModule } from 'src/material.module';
import { MainHeaderComponent } from '../shared/main-header/main-header/main-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';



@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    MainHeaderComponent,
    MainDashboardComponent,
    AlertsComponent,
    AssetDetailComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialAllModule,  
    NgApexchartsModule,
  ]
})
export class MainModule { }
