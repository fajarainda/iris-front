import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list-layout',
  templateUrl: './user-list-layout.component.html',
  styleUrls: ['./user-list-layout.component.css']
})
export class UserListLayoutComponent {

  userA : UserModel=new UserModel({
    id : 1,
    name : "User A",
    role : "Admin",
    salary : "15.000.000",
    createdAt : "29 January 2023, 12.01",
    active : true
  })

  userB : UserModel=new UserModel({
    id : 2,
    name : "user B",
    role : "Secretary",
    salary : "10.000.000",
    createdAt : "29 January 2023, 12.05",
    active : false
  })

  userC : UserModel=new UserModel({
    id : 3,
    name : "user C",
    role : "Finance",
    salary : "8.000.000",
    createdAt : "29 January 2023, 08.25",
    active : false    
  })

  userD : UserModel=new UserModel({
    id : 4,
    name : "user D",
    role : "Logistic",
    salary : "5.000.000",
    createdAt : "29 January 2023, 08.30",
    active : true
  })

  userList : UserModel[] = [
    this.userA,
    this.userB,
    this.userC,
    this.userD
  ]
  
  submitEvent() {
    console.log(this.createUserForm.value.name)
    console.log(this.createUserForm.value.role)
    console.log(this.createUserForm.value.salary)
  }

    createUserForm = new FormGroup ({
    name : new FormControl('', [Validators.required]),
    role : new FormControl('', [Validators.required]),
    salary : new FormControl('', [Validators.required])
  });

}
