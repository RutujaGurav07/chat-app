import { Injectable } from '@angular/core';

import { CometChat } from '@cometchat-pro/chat';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser: unknown;


  constructor() { 
    // this.init(environment.appId);
  }
  // init(appId: string, apiKey: string) {
  //   CometChat.init(appId).then(
  //        msg => console.log('Initialized succesfull: ', msg),
  //        err => {
  //          console.log('App init failed', err);
  //          this.snackBar.open(
  //            'App initialization failed. Please refresh the page.'
  //          );
  //        }
  //      );
  //  }

  
   login(userId: string) {
    return CometChat.login(userId)
      .then(usr => (this.currentUser = usr), (this.currentUser = null))
      .then(_ => console.log('User logged in'), console.error);
  }
}


