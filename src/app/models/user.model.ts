// src/app/models/user.model.ts
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  status: 'online' | 'away' | 'offline';
  role: 'admin' | 'user' | 'guest';
  lastSeen: Date;
}