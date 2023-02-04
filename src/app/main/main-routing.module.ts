import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'main-dashboard' ,component:MainDashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'alerts',component:AlertsComponent},
  {path:'asset',component:AssetDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
