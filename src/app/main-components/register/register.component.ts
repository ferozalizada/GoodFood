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
  //creates a new object of type user
  // private user: User;
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


  // private passwordGroup: FormGroupName;
  // email = new FormControl('name@email.com', Validators.required);
  isMatch(){
    return !(this.user.password == this.user.passwordConfirmation)
  }

  constructor(
    private httpClient: HttpClient,
    private postService: PostDataService
    // private meesageService: MessageSerive
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
  }
  addUser(user: any){
    this.postService.postRegistrationData(user)
    .subscribe((user)=> console.log('Response: added to the Database!'))
    // this.formData.reset();

  }
  // makes the https request
  postUserData(formData: NgForm){
    this.addUser(JSON.stringify(formData.value));
    formData.reset();
  }

}
