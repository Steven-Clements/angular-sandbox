import { Component } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Define Properties
  user: User;
  
  constructor() {
    this.user = {
      firstName: 'Steven',
      lastName: 'Clements',
      email: 'develop@clementine-solutions.com',
      phone: '+15754041712'
    }
  }
}