import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validator, FormGroupName, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostDataService } from '../../services/post-data.service';
import { PHPResponse } from '../../types';

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
    private postUserData: PostDataService
  ) { }

  ngOnInit() {
    this.checkValidation();
  }

  checkValidation() {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  currentUser = {
    name:""
  };
  authenticateUser(user: NgForm) {
    this.postUserData.loginUser(user.value)
      .subscribe((res: PHPResponse) => {
        if(res.status === 'success'){
          alert('Welcome '+ res.data+ '! You are now logged in');
          this.currentUser.name = res.data;
          // change the route
        } else {
          //route adn alert
          alert("No such User");
        }

      })
    this.loginForm.reset();
  }
}
