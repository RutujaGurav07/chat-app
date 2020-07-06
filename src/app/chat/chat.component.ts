import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { CometChat } from '@cometchat-pro/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(   readonly authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

}
