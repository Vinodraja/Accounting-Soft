import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.css']
})
export class DefaultsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Customer(){
    this.router.navigate(["Customers"])
    }
    Suppliers(){
      this.router.navigate(["Suppliers"])
      }
      Home(){
        this.router.navigate(["Home"]);
      }
      Logout(){
        this.router.navigate(["Login"]);
      }
}
