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
 
 
 getNome(): Observable<any> {

  const userId = localStorage.getItem('userID'); 

     if (userId) {
       return this.db.list(`usuarios/${this.userId}`).valueChanges();
      // return this.db.list('usuarios/${this.userId}').valueChanges();

     } else {
       console.error('ID do usuário não definido.');
      return new Observable(); 
    }
   }
 
  addNome(nome: any, email: string): void{
    const id = uuidv4();
    this.db.list('usuarios').set(id, { ...nome, id, email});
  }


  updateNome(id: string, nome: string, bio: string): Observable<void>{
    
    if(id){
      const updateData = {nome, bio}; 
      this.db.list('usuarios').update(id, updateData);
    }else{
      console.log("Id nao encontrado");
    }
      return new Observable();
      
    }
   
 
  // setUserId(userId: string | null) {
  //   this.userId = userId; // Define o ID do usuário
  // }

  
}
