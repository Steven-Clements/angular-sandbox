import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data?: Observable<Array<any>>;

  constructor() {
    this.users = [
      {
        firstName: 'Steven',
        lastName: 'Clements',
        email: 'develop@clementine-solutions.com',
        phone: '+15754041712',
        active: true,
        registered: new Date('01/02/2022 08:30:00'),
      },
      {
        firstName: 'Kathryn',
        lastName: 'Clements',
        email: 'kathryn.clements@clementine-solutions.com',
        phone: '+15755719827',
        registered: new Date('01/04/2022 09:57:12'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        active: true,
        registered: new Date('02/14/2022 14:31:12'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next([1]);
      }, 1000);
      setTimeout(() => {
        observer.next([2]);
      }, 2000);
      setTimeout(() => {
        observer.next([3]);
      }, 3000);
      setTimeout(() => {
        observer.next([4]);
      }, 4000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
