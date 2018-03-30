import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroupName } from '@angular/forms';
import { User } from '../../classes/user';
import { FormControl, FormGroup, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //creates a new object of type user
  private user: User;
  private arg: boolean;
  private registrationForm: FormGroup;
  // private passwordGroup: FormGroupName;
  // email = new FormControl('name@email.com', Validators.required);


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, EmailValidator]],
        type: ['', Validators.required],
        userName: ['', Validators.required],
        
        passwords: this.formBuilder.group(
          {
          pwd1: ['', [Validators.required, Validators.minLength(6)]],
          pwd2: ['', [Validators.required, Validators.minLength(6)]]

          }
        )
      }
    )
  }
  // checkPassword(){}

  postUserData(formData: NgForm){
    console.log(JSON.stringify(formData.value));
    console.log(formData.value , "this is the form value");
  }

}
