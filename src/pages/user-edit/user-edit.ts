import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersProvider } from '../../providers/users/users';
import { User } from '../../models/user/user';

import { UserPage } from '../user/user';

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  user: User;

  formData: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.formData = this.formBuilder.group({
        _id:[],
        username: ['', Validators.required],
        email: ['', Validators.required],
        first_name: [],
        last_name: []
      });
  }

  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);
  }

  getUser(id:string): void{
    this.usersProvider.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
        console.log(this.user);
      }
    );
  }

  editUser(): void{
    this.usersProvider.editUser(this.formData.value).subscribe(
      (response:any)=>{
        this.navCtrl.push(UserPage, {id: response.user._id});
      }
    );
  }


}
