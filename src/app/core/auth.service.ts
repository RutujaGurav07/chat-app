import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CometChat } from '@cometchat-pro/chat';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private snackBar:MatSnackBar) { 
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
}
