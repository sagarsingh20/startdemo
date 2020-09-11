import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import{ FormsModule } from '@angular/forms'
import { Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  top={
  email: null,
  password: null
}
  
  constructor( private router: Router) {  }

  ngOnInit() {  }
  login (top) {
    
    console.log(top)
    this.router.navigate (['/user-list'])
  
  }
 
}


