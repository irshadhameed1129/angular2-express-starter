import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'add-user',
  templateUrl: './adduser.html',
  styleUrls: ['./dash.css']
})
export class AdduserComponent implements OnInit {
  constructor( private router: Router) {   }
  ngOnInit()  {}
 login() {
   
   console.log('insisi');
   
 }
  }
