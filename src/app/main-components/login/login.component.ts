import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validator, FormGroupName, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostDataService } from '../../services/post-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder, 
    private httpClient: HttpClient,
    private postUserData: PostDataService) { }

  ngOnInit() {
    this.checkValidation();
  }

  checkValidation(){
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  authenticateUser(user: any){
    console.log(user.value)
    this.postUserData.loginUser(user.value)
      .subscribe((user) => console.log("Loggin in"))
    this.loginForm.reset();
  }

}
