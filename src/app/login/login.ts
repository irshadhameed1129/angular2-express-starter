import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthenticationService } from '../services/login.service';
import { User } from '../dash/usermodel';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
 
  myForm: FormGroup;
  model = new User('','');
   color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  constructor( private router: Router,private fb: FormBuilder,public dialog: MdDialog, private aS: AuthenticationService) {   }
  ngOnInit()  {
   this.myForm = this.fb.group({
            username: [''],
            password: ['']             
                                      });

  }
   
     
    
      


 login() {
   

    this.aS.login(this.myForm.value)
    .subscribe(data => { 
                    
                     
                      this.router.navigate(['/dash']);
                     
                },
                
                error => {
                    this.router.navigate(['/']);
                    
                });
   
        }
  }


