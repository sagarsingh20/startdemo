import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  create={
    //id:null,
    fullName: null,
    email: null,
    gender: null
  }
   data=[];
   
  constructor(private router: Router) {  }
    
  ngOnInit() { 
    if(localStorage.getItem('key')!== null)
    this.data = JSON.parse(localStorage.getItem('key'))
   }
    createform (create){
    this.router.navigate (['/user-list']);
    // for (var i=0; i<this.data.length ;i++){
    //   this.data.push(create)
    //  }
      this.data.push(create)
      //console.log(this.data)
    
    //console.log(this.data)
    localStorage.setItem ('key', JSON.stringify(this.data));
  }
  
}
