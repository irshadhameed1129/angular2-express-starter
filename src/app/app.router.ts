import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';



export const routes: Routes = [ 
    { path:'**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent },
         
];
@NgModule({
 
  imports: [ RouterModule.forRoot(routes, { useHash : true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
