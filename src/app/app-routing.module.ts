import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { AuthenticationGuard } from './services/authentication/authentication.guard';

const routes: Routes = [
 
  { path: "", pathMatch: 'full',redirectTo:'/login'},
  { path: '', component: AuthenticationComponent, loadChildren: ()=>AuthenticationModule},
  { path: '', component: MainComponent, loadChildren: ()=>MainModule},
  { path: '**', redirectTo: 'login'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
