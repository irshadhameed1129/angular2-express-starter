import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'add-user',
  templateUrl: './adduser.html',
  styleUrls: ['./dash.css']
})
export class AdduserComponent implements OnInit {
  
  myForm: FormGroup;
  
  constructor( private router: Router,private fb: FormBuilder) {   }
  ngOnInit()  {
  
            this.myForm = this.fb.group({
            username: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password: ['']             
                                      });
              }
 login() {
   
   console.log(this.myForm.value);
   
       }
  }
