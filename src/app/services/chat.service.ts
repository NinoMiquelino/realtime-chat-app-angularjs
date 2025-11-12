// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Message, Channel } from '../models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getChannels(): Observable<Channel[]> {
    return this.firestore.collection<Channel>('channels').valueChanges({ idField: 'id' });
  }

  getMessages(channelId: string): Observable<Message[]> {
    return this.firestore
      .collection<Message>('messages', ref => 
        ref.where('channelId', '==', channelId).orderBy('timestamp', 'asc')
      )
      .valueChanges({ idField: 'id' });
  }

  async sendMessage(channelId: string, senderId: string, content: string, type: 'text' | 'image' | 'file' = 'text', file?: File): Promise<void> {
    let fileUrl = '';
    
    if (file) {
      const filePath = `uploads/${Date.now()}_${file.name}`;
      const task = await this.storage.upload(filePath, file);
      fileUrl = await task.ref.getDownloadURL();
    }

    const message: Message = {
      id: this.firestore.createId(),
      channelId,
      senderId,
      content,
      timestamp: new Date(),
      type,
      fileUrl: file ? fileUrl : undefined,
      reactions: {}
    };

    await this.firestore.collection('messages').doc(message.id).set(message);
  }

  async addReaction(messageId: string, emoji: string, userId: string): Promise<void> {
    const messageRef = this.firestore.collection('messages').doc(messageId);
    const message = await messageRef.get().toPromise();
    
    if (message?.exists) {
      const reactions = message.data()?.['reactions'] || {};
      if (!reactions[emoji]) {
        reactions[emoji] = [];
      }
      
      if (!reactions[emoji].includes(userId)) {
        reactions[emoji].push(userId);
        await messageRef.update({ reactions });
      }
    }
  }

  async createChannel(name: string, description: string, createdBy: string, isPrivate: boolean = false): Promise<void> {
    const channel: Channel = {
      id: this.firestore.createId(),
      name,
      description,
      createdBy,
      createdAt: new Date(),
      isPrivate,
      members: [createdBy]
    };

    await this.firestore.collection('channels').doc(channel.id).set(channel);
  }
}