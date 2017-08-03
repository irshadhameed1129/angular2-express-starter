import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-set1',
  templateUrl: './set1.html',
  styleUrls: ['./set1.css']
})


export class Set1Component implements OnInit {
  
   i :number;
  answers = [  'രാവിലെ','രാത്രി','കസ്റ്റമര്‍ക്ക് ഇഷ്ടമുള്ളപ്പോള്‍', 'ഉച്ചയ്ക്ക് ശേഷം', ];
   favoriteSeason: string[]=[];
  qes: number ;
     total : number = 0;
  seasons = [  'രാവിലെ','രാത്രി','കസ്റ്റമര്‍ക്ക് ഇഷ്ടമുള്ളപ്പോള്‍', 'ഉച്ചയ്ക്ക് ശേഷം', ];

  seasons1 = [  'ക്ഷേമയോടെ കേട്ടിരിക്കും','ദേഷ്യപ്പെട്ടു ഇറങ്ങി പോകും','കസ്റ്റമറോട് ദേഷ്യപ്പെടും', 'സൂപ്പെര്‍വൈസറിനോട് പരാതി പറയും', ];
  constructor( private router: Router) {   }
  ngOnInit()  {
  this.qes = 1;
  }
  
 login() {
   
   console.log('insisi');
   
 }
  next()
  {  
    this.qes++
  }
  prev()
  {  
    this.qes = this.qes-1;
  }
  res()
  {
    console.log(this.favoriteSeason);
                           
                           for(this.i=0;this.i<2;this.i++)
                           {
                              if(this.answers[this.i] === this.favoriteSeason[this.i])
                              {
                                this.total++;
                              }
                           }

     console.log(this.total);


  }
  }
