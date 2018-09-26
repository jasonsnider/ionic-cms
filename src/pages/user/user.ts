import { Component } from '@angular/core';
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams
} from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';
import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user: User;

  constructor(
    private loadingCtrl: LoadingController,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);
  }

  private getUser(id:string): void{

    let loader = this.loadingCtrl.create({
      content: 'Loading...',
    });

    loader.present();

    this.usersProvider.getUser(id).subscribe(

      (response:any)=>{
        this.user = response.user;
        loader.dismiss();
      }
    );
  }

}
