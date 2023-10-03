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

  cadastrar(email: string, senha: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          // Agora, você pode salvar os dados do usuário no Realtime Database
          // Por exemplo, você pode criar um nó de usuário com o UID como chave
          // e salvar os dados relevantes lá.
          return this.db.object(`usuarios/${user.uid}`).set({
            // email: user.email,
            // nome: nome,
            // bio: bio,

            // Outros dados do usuário que você deseja salvar
          });
        } else {
          // Trate o caso em que 'user' é null, por exemplo, lançando um erro ou tratando a falha de alguma outra forma.
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
    return this.fireAuth.signOut();
  }

  setUser(user: string){
    localStorage.setItem('user', user);
  }
  getUser(): string | null {
    return localStorage.getItem('user');
  }
}
