import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroupName } from '@angular/forms';
import { User } from '../../classes/user';
import { FormControl, FormGroup, EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PostDataService } from '../../services/post-data.service';
import { PHPResponse } from '../../types';
import { Router } from '@angular/router';

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
    private postService: PostDataService,
    private router: Router
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
      .subscribe((res: PHPResponse) => {
          if(res.status === 'success'){
            alert("Your Account has been created!")
            this.router.navigate(['/home']);
          } else {
            alert("User Taken")
            formData.reset();
          }
        }
      );
  }
}
