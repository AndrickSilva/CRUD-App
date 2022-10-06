import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserModel } from './home.model'

import { DbService } from '../services/db.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formValue!: FormGroup;
  userModelObj: UserModel = new UserModel();
  // userData!: any;
  constructor(private formBuilder: FormBuilder, private api: DbService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['']
    })
    // this.getUserDetails()
  }
  postUserDetails() {
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.email = this.formValue.value.email;

    this.api.postUser(this.userModelObj)
      .subscribe(res => {
        if (!this.userModelObj) return
        console.log(this.userModelObj);
        alert("Added successfully")
        this.formValue.reset()
      },
        err => {
          alert("something went wrong")
        })
  }


  // getUserDetails() {
  //   this.api.getUser()
  //     .subscribe(res => {
  //       this.userData = res;
  //     })
  // }
}