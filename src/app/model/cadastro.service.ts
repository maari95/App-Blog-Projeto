import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  nome: string='';

  constructor(private fireAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  login(email: string, senha: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, senha);
  }

  cadastrar(email: string, senha: string, nome: string, bio: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          
          return this.db.object(`usuarios/${user.uid}`).set({
           nome: nome,
           bio: bio,
           email: email

          });
        } else {
           throw new Error('Falha ao criar a conta de usuário.');
        }
      });
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
    localStorage.removeItem('id');
    return this.fireAuth.signOut();
  }

  // setUser(user: string){
  //   localStorage.setItem('user', user);
  // }
  // getUser(): string | null {
  //   return localStorage.getItem('user');
  // }
}
