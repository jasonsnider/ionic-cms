import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user/user';

@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  getUsers(): void{
    console.log('all users');
  }

  getUser(): void{
    console.log('one user');
  }

  createUser(): void{
    console.log('create user');
  }

  editUser(): void{
    console.log('edit user');
  }

  deleteUser(): void{
    console.log('delete');
  }

}
