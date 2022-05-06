import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  currentYear!:number;


  constructor() { }

  ngOnInit(): void {
    this.currentYear  = new Date().getFullYear();
  }

  LoginUser(){


  }

}
