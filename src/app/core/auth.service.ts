import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CometChat } from '@cometchat-pro/chat';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 currentUser: unknown;
  constructor(private snackBar: MatSnackBar) {
    this.init(environment.appId);
  }
  init(appId: string) {
    CometChat.init(appId).then(
      msg => console.log('Initialized succesfull: ', msg),
      err => {
        console.log('App init failed', err);
        this.snackBar.open(
          'App initialization failed. Please refresh the page.'
        );
      }
    );
  }
  login(userId: string) {
    return CometChat.login(userId)
      .then(usr => (this.currentUser = usr), (this.currentUser = null))
      .then(_ => console.log('User logged in'), console.error);
  }
}
