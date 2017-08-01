import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from "@angular/forms";


import 'hammerjs';

import { UpdatestockitemComponent } from './vazhipad/stock/update_stock_item';
 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {
  MdAutocompleteModule, MdButtonModule,  MdButtonToggleModule,  MdCardModule,   MdCheckboxModule,   MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';

import { HeroesComponent } from './hero/hero';
@NgModule({
  declarations: [
    AppComponent,DashboardComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
   ReactiveFormsModule,
    FormsModule,
    HttpModule,
     MdAutocompleteModule, MdButtonModule,  MdButtonToggleModule,  MdCardModule,   MdCheckboxModule,   MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
    
    AppRoutingModule
    
  ],
 
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
