import { Injectable } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';

const USERS_TO_FETCH = 30;


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: CometChat.UserObj[];



  constructor() { }
  getContacts() {
    const usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(USERS_TO_FETCH)
      .build();
    return usersRequest.fetchNext().then(users => this.contacts = users);
  }
  trackOnlineStatus(listenerId: string) {
    const userListener = new CometChat.UserListener({
      onUserOffline: usr => this.setUserStatus(usr, 'offline'),
      onUserOnline: usr => this.setUserStatus(usr, 'online')
    });
    return CometChat.addUserListener(listenerId, userListener);

  }
  private setUserStatus(usr: CometChat.UserObj, status: string) {
    if (!this.contacts) {
      return;
    }
    const userToUpdate = this.contacts.find(c => c.uid === usr.uid);
    if (userToUpdate) {
      userToUpdate.status = status;
    }
  }
}
