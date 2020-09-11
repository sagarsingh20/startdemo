import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  localdata=[];
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('key')))
    this.localdata = JSON.parse(localStorage.getItem('key'))
    console.log(this.localdata)
   }
  
  back(){
    this.router.navigate (['/login'])
  }
  add(){
    this.router.navigate(['/create-user'])
  }
}
