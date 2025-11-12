// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  displayName = '';
  isRegistering = false;

  constructor(private authService: AuthService) {}

  async login(): Promise<void> {
    try {
      await this.authService.login(this.email, this.password);
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro no login. Verifique suas credenciais.');
    }
  }

  async register(): Promise<void> {
    try {
      await this.authService.register(this.email, this.password, this.displayName);
    } catch (error) {
      console.error('Erro no registro:', error);
      alert('Erro no registro. Tente novamente.');
    }
  }
}