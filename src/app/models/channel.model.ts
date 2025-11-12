// src/app/models/channel.model.ts
export interface Channel {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  createdAt: Date;
  isPrivate: boolean;
  members: string[];
}