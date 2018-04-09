import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroupName } from '@angular/forms';
import { User } from '../../classes/user';
import { FormControl, FormGroup, EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PostDataService } from '../../services/post-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private arg: boolean;
  private registrationForm: FormGroup;

  submitted = false;
  user = new User(
    "", 
    "",
    "",
    "",
    0,
    "",
    ""
  );

  constructor(
    private httpClient: HttpClient,
    private postService: PostDataService
  ) { }

  isMatch(){
    return !(this.user.password == this.user.passwordConfirmation)
  }

  ngOnInit() {
    // ...
  }

  // makes the https request
  postUserData(formData: NgForm){
    this.postService
      .postRegistrationData(formData.value)
      .subscribe((user) => {
        console.log('Response: added to the Database!');
        formData.reset();
      });
  }
}
