import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersProvider } from '../../providers/users/users';

import { UserPage } from '../user/user';

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.user = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        first_name: [],
        last_name: []
      });
  }

  createUser(): void{
    this.usersProvider.createUser(this.user.value).subscribe(
      (response:any)=>{
        this.navCtrl.push(UserPage, {id: response.user._id});
      }
    );
  }

}
