import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {v4 as uuidv4} from 'uuid';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private db: AngularFireDatabase) { }

  getNome(): Observable<any>{
    return this.db.list('usuarios').valueChanges();
  }
  addNome(nome: any, bio: string, email: string): void{
    const id = uuidv4();
    this.db.list('usuarios').set(id, { ...nome, id, bio, email});
  }
  updateNome(id: string, nome: string, bio: string, email: string): void {
    const updateData = {
      nome,
      bio,
      email
    }
    this.db.list('usuarios').update(id, updateData);
  }
  removeNome(id: string): void{
    this.db.list('usuarios').remove(id);
  }
}
