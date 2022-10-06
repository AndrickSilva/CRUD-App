import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbService } from '../services/db.service'


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userData!: any;

  constructor(private api: DbService) { }


  ngOnInit(): void {
    this.getUserDetails()
  }

  getUserDetails() {
    this.api.getUser()
      .subscribe(res => {
        this.userData = res;
      })
  }

  deleteUser(row: any) {
    this.api.deleteUser(row.id)
      .subscribe(res => {
        alert("Deleted Successfully")
        this.getUserDetails()
      })
  }
}
