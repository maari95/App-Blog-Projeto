import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  user: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) {}

  // ... Outros métodos existentes ...
  getUserId() {
   /*  return this.user ? this.user.id: ''; */
   return localStorage.getItem('id');
  
  }

  getAllUserData(uid: string): Observable<any> {
    return this.afDatabase.object(`usuarios/${uid}`).valueChanges();
  }


  async editarPerfilUsuario(
    nomeUsuario: string,
    bio: string,
    email: string
  ): Promise<void> {
    try {
       const userId = this.getUserId();  // Obtém o ID do usuário atual
     /*  const userId = 'QRYa7KTy5WOUZ8Wx0nzUU1ZHjXa2'; // Obtém o ID do usuário atual */

      if (userId) {
        // Atualize os dados do usuário no banco de dados em tempo real
        await this.afDatabase.object(`usuarios/${userId}`).update({
          nome: nomeUsuario,
          bio: bio,
          email: email
        });
       

        // Atualize também os dados do usuário localmente (opcional)
        /* if (this.user) {
          this.user.nome_usuario = nomeUsuario;
          this.user.bio = bio;
          this.user.email_usuario = email;
        } */
      }
    } catch (error) {
      console.error('Erro ao editar perfil do usuário', error);
    }
  }
  
}
