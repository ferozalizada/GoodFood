import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validator, FormGroupName, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  authenticateUser(loginCredentials){
    console.log(loginCredentials.value, 'this is the login details');
  }

}
