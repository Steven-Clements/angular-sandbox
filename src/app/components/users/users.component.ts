import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any;
  data: any;

  constructor(private userService: UserService) {
    this.users = [];
    this.userService.getData().subscribe(data => {
      console.log(data);
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({ value, valid }: NgForm) {
    if (!valid) {
      console.log('Invalid form data...');
    } else {
      value.active = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
