import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(email: string, senha: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, senha);
  }

  cadastrar(email: string, senha: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, senha);
  }

  validarToken(): boolean {
    const token = localStorage.getItem('token');
    const expiracao = localStorage.getItem('expiracao');
    if (!token || !expiracao) { return false; }
    return new Date() < new Date(expiracao);
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('expiracao')
    return this.fireAuth.signOut();
  }

  setUser(user: string){
    localStorage.setItem('user', user);
  }
  getUser(): string | null {
    return localStorage.getItem('user');
  }
}
