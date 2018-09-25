import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';
import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersProvider: UsersProvider
  ) {}

  ionViewDidLoad() {
    this.getUsers();
  }

  private getUsers(): void{
    this.usersProvider.getUsers().subscribe(
      (response:any)=>{
        this.users = response.users;
      }
    );
  }
}
