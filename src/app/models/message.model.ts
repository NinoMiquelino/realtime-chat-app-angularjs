// src/app/models/message.model.ts
export interface Message {
  id: string;
  channelId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  reactions: { [emoji: string]: string[] };
  replyTo?: string;
}