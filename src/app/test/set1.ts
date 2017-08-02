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

  seasons = [  'Winter','Spring','Summer', 'Autumn', ];
  constructor( private router: Router) {   }
  ngOnInit()  {}
  
 login() {
   
   console.log('insisi');
   
 }
  }
