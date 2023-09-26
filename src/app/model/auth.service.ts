import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'authenticated'; // Chave para armazenar o estado de autenticação

  constructor() {
    // Ao inicializar o serviço, verifique o armazenamento local para determinar o estado de autenticação atual
    this.autenticado = localStorage.getItem(this.AUTH_KEY) === 'true';
  }

  private autenticado = false;

  login() {
    this.autenticado = true;
    localStorage.setItem(this.AUTH_KEY, 'true'); // Salve o estado de autenticação no localStorage
  }

  sair() {
    this.autenticado = false;
    localStorage.setItem(this.AUTH_KEY, 'false'); // Atualize o estado de autenticação no localStorage
  }

  getAuth() {
    return this.autenticado;
  }
}
