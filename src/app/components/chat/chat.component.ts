// src/app/components/chat/chat.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChatService } from '../../services/chat.service';
import { Message, Channel } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  channels: Channel[] = [];
  selectedChannel?: Channel;
  messages: Message[] = [];
  newMessage = '';
  currentUser: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private chatService: ChatService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.afAuth.authState.subscribe(user => {
        this.currentUser = user;
      }),
      
      this.chatService.getChannels().subscribe(channels => {
        this.channels = channels;
        if (channels.length > 0 && !this.selectedChannel) {
          this.selectChannel(channels[0]);
        }
      })
    );
  }

  selectChannel(channel: Channel): void {
    this.selectedChannel = channel;
    this.subscriptions.push(
      this.chatService.getMessages(channel.id).subscribe(messages => {
        this.messages = messages;
      })
    );
  }

  async sendMessage(): Promise<void> {
    if (this.newMessage.trim() && this.selectedChannel && this.currentUser) {
      await this.chatService.sendMessage(
        this.selectedChannel.id,
        this.currentUser.uid,
        this.newMessage.trim()
      );
      this.newMessage = '';
    }
  }

  async addReaction(message: Message, emoji: string): Promise<void> {
    if (this.currentUser) {
      await this.chatService.addReaction(message.id, emoji, this.currentUser.uid);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}