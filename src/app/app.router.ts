import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';

import { NgModule } from '@angular/core';


export const routes: Routes = [ 
  { path:'', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
 
  
  
   
  
      
];
@NgModule({
 
  imports: [ RouterModule.forRoot(routes, { useHash : true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
