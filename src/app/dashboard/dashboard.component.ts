import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  form: FormGroup;



  constructor(public fb: FormBuilder) {

    

    this.form = fb.group({
      text: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  
}
