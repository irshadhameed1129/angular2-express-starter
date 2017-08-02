import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { DashComponent } from './dash/dash';
import { LoginComponent } from './login/login';
import { Set1Component } from './test/set1';
import {ReactiveFormsModule} from "@angular/forms";


import 'hammerjs';

 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import {
  MdAutocompleteModule, MdButtonModule,  MdButtonToggleModule,  MdCardModule,   MdCheckboxModule,   MdChipsModule,
  MdCoreModule,  MdDatepickerModule,  MdDialogModule,  MdExpansionModule,  MdGridListModule,  MdIconModule,  MdInputModule,
  MdListModule,  MdMenuModule,  MdNativeDateModule,  MdPaginatorModule,  MdProgressBarModule,  MdProgressSpinnerModule,  MdRadioModule,
  MdRippleModule,  MdSelectModule,  MdSidenavModule,  MdSliderModule,  MdSlideToggleModule,  MdSnackBarModule,  MdSortModule,
  MdTableModule,  MdTabsModule,  MdToolbarModule,  MdTooltipModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashComponent,Set1Component
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
   ReactiveFormsModule,
    FormsModule,
    HttpModule,
     MdAutocompleteModule, MdButtonModule,  MdButtonToggleModule,  MdCardModule,   MdCheckboxModule,   MdChipsModule,
  MdCoreModule,  MdDatepickerModule,  MdDialogModule,  MdExpansionModule,  MdGridListModule,  MdIconModule,  MdInputModule,
  MdListModule,  MdMenuModule,  MdNativeDateModule,  MdPaginatorModule,  MdProgressBarModule,  MdProgressSpinnerModule,
  MdRadioModule,  MdRippleModule,  MdSelectModule,  MdSidenavModule,  MdSliderModule,  MdSlideToggleModule,  MdSnackBarModule,
  MdSortModule,  MdTableModule,  MdTabsModule,  MdToolbarModule,  MdTooltipModule,
    
    AppRoutingModule
    
  ],
 
 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
