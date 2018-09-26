import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user/user';

@Injectable()
export class UsersProvider {

  private url:string = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUser(id:string): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
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
