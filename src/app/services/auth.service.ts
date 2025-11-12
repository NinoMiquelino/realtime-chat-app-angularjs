// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  async login(email: string, password: string): Promise<void> {
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
    await this.updateUserStatus(credential.user!.uid, 'online');
  }

  async register(email: string, password: string, displayName: string): Promise<void> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const user: User = {
      uid: credential.user!.uid,
      email: email,
      displayName: displayName,
      status: 'online',
      role: 'user',
      lastSeen: new Date()
    };
    await this.firestore.collection('users').doc(user.uid).set(user);
  }

  async logout(): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      await this.updateUserStatus(user.uid, 'offline');
    }
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  private async updateUserStatus(uid: string, status: 'online' | 'away' | 'offline'): Promise<void> {
    await this.firestore.collection('users').doc(uid).update({
      status: status,
      lastSeen: new Date()
    });
  }
}