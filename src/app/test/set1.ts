import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-set1',
  templateUrl: './set1.html',
  styleUrls: ['./set1.css']
})


export class Set1Component implements OnInit {
  
   favoriteSeason: string;
  qes: number =1;
     
  seasons = [  'രാവിലെ','രാത്രി','കസ്റ്റമര്‍ക്ക് ഇഷ്ടമുള്ളപ്പോള്‍', 'ഉച്ചയ്ക്ക് ശേഷം', ];
  constructor( private router: Router) {   }
  ngOnInit()  {}
  
 login() {
   
   console.log('insisi');
   
 }
  next()
  {  
    this.qes = this.qes+1;
  }
  prev()
  {  
    this.qes = this.qes-1;
  }
  }
