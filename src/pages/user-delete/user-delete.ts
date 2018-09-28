import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';
import { User } from '../../models/user/user';

import { UsersPage } from '../users/users';

@IonicPage()
@Component({
  selector: 'page-user-delete',
  templateUrl: 'user-delete.html',
})
export class UserDeletePage {

  user: User;

  constructor(
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);
  }

  getUser(id:string): void{
    this.usersProvider.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }

  deleteUser(id:string): void{
    this.usersProvider.deleteUser(id).subscribe(
      (response:any)=>{
        this.navCtrl.push(UsersPage);
      }
    );
  }

  cancel(): void{
    this.navCtrl.push(UsersPage);
  }

}
