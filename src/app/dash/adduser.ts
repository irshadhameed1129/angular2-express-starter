import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './usermodel';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'add-user',
  templateUrl: './adduser.html',
  styleUrls: ['./dash.css']
})
export class AdduserComponent implements OnInit {
  
  myForm: FormGroup;
   
    model = new User('','');

        
  
  constructor( private router: Router,private fb: FormBuilder) {   }
  ngOnInit()  {
  
            this.myForm = this.fb.group({
            username: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password: ['']             
                                      });
              }
 login() {
   

   this.model.username = this.myForm.controls.username.value;
   this.model.password = this.myForm.controls.password.value;
   let body= JSON.stringify(this.model);
   console.log(body);
   console.log(this.myForm.controls.username.value);
   
       }
  }
