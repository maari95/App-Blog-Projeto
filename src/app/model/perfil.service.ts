import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {v4 as uuidv4} from 'uuid';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CadastroService } from './cadastro.service';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  userId: string | null = null;

  constructor(private db: AngularFireDatabase, private cadastroService: CadastroService) { }

  getNome(): Observable<any>{
    return this.db.list('usuarios').valueChanges();
    if (this.userId) {
        return this.db.object(`usuarios/${this.userId}`).valueChanges();
        } else {
          // Lida com o caso em que o ID do usuário não foi definido
      console.error('ID do usuário não definido.');
       return new Observable(); // Retorna um Observable vazio em caso de erro
     }
  }


  // getNome(): Observable<any> {
  //   if (this.userId) {
  //     return this.db.object(`usuarios/${this.userId}`).valueChanges();
  //   } else {
  //     // Lida com o caso em que o ID do usuário não foi definido
  //     console.error('ID do usuário não definido.');
  //     return new Observable(); // Retorna um Observable vazio em caso de erro
  //   }
  // }
 
  addNome(nome: any, email: string): void{
    const id = uuidv4();
    this.db.list('usuarios').set(id, { ...nome, id, email});
  }
  updateNome(id: string, nome: string, bio: string,): void {
    const updateData = {
      nome,
      bio,
    }
    this.db.list('usuarios').update(id, updateData);
  }
  removeNome(id: string): void{
    this.db.list('usuarios').remove(id);
  }

  setUserId(userId: string | null) {
    this.userId = userId; // Define o ID do usuário
  }

  
}
